require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Definir as origens permitidas
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://utflorestalutfpr.com']
  : ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS policy: origin ${origin} not allowed`));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// 1) Habilita CORS genérico
app.use(cors(corsOptions));

// 2) Parse JSON
app.use(bodyParser.json());

// 3) Tratamento explícito de preflight (OPTIONS)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin || '');
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// 4) Log das origens (debug)
app.use((req, res, next) => {
  console.log('Origin:', req.headers.origin);
  next();
});

// 5) Rota de envio de e-mail
app.post('/send-email', async (req, res) => {
  const { nome, assunto, telefone, email, necessidade } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${nome}" <${process.env.EMAIL_USER}>`,
    to: 'utflorestal.utfpr@gmail.com',
    subject: `Novo contato: ${assunto}`,
    text: `
      Nome: ${nome}
      Telefone: ${telefone}
      Email: ${email}
      Necessidade: ${necessidade}
    `,
    replyTo: email && email.trim() ? email : undefined,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    return res.status(500).json({ message: 'Erro ao enviar o email.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
