require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Definir as origens permitidas
const allowedOrigins = ['https://utflorestalutfpr.com'];  // URL exata do seu frontend

const corsOptions = {
  origin: function (origin, callback) {
    // Permite que qualquer origem que esteja na lista de origens permitidas faça requisição
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS policy: origin ${origin} not allowed`));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Permitir cookies (se necessário)
};

// Habilitar CORS para todas as requisições
app.use(cors(corsOptions));

// Parse JSON
app.use(bodyParser.json());

// Tratar requisições preflight (OPTIONS) com cabeçalhos apropriados
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin || '*');  // Definir a origem permitida (não usar '*' para cookies)
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');  // Permitir credenciais (se necessário)

  // Responder à requisição OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Rota de envio de e-mail
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
