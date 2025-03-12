require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Definir as origens permitidas de acordo com o ambiente
let allowedOrigins = [];

if (process.env.NODE_ENV === 'production') {
  // Em produção, permitir o domínio do frontend hospedado no Render e também localhost para testes
  allowedOrigins = ['https://utfpr-ej-1.onrender.com', 'http://localhost:3000'];
} else {
  // Durante o desenvolvimento, permitir o localhost
  allowedOrigins = ['http://localhost:3000'];
}

const corsOptions = {
  origin: function (origin, callback) {
    // Permite requisições sem origin (por exemplo, via Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Suporte ao preflight do CORS

app.use(bodyParser.json());

// Middleware para logar o header "Origin"
app.use((req, res, next) => {
  console.log('Origin:', req.headers.origin);
  next();
});

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
  };

  if (email && email.trim() !== '') {
    mailOptions.replyTo = email;
  }

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).send({ message: 'Erro ao enviar o email.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
