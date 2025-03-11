require('dotenv').config(); // Adicione esta linha no topo do seu código

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Configuração do CORS para aceitar requisições apenas do domínio do frontend
const corsOptions = {
  origin: 'https://utfpr-ej.onrender.com',  // Coloque o domínio do seu frontend aqui
  methods: 'GET,POST,PUT,DELETE',           // Métodos permitidos
  allowedHeaders: 'Content-Type,Authorization',  // Cabeçalhos permitidos
};

// Habilitar CORS com as opções configuradas
app.use(cors(corsOptions));

// Middleware para parsing de JSON
app.use(bodyParser.json());

// Adicionando middleware para verificar o host da requisição
app.use((req, res, next) => {
  const allowedHosts = ['utfpr-ej.onrender.com'];  // Domínio do seu frontend
  const host = req.get('Host');

  if (!allowedHosts.includes(host)) {
    return res.status(403).send('Forbidden: Invalid Host header');
  }
  next();
});

// Rota para enviar o formulário
app.post('/send-email', async (req, res) => {
  const { nome, assunto, telefone, email, necessidade } = req.body;

  // Configuração do transporte de e-mail usando o Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou outro serviço de e-mail
    auth: {
      user: process.env.EMAIL_USER, // Agora usamos a variável de ambiente
      pass: process.env.EMAIL_PASS, // Agora usamos a variável de ambiente
    },
  });

  // Configuração do e-mail
  const mailOptions = {
    from: `"${nome}" <${process.env.EMAIL_USER}>`, // O nome do remetente será o do usuário
    to: 'igor.vidaleufrazio@gmail.com',
    subject: `Novo contato: ${assunto}`,
    text: `
      Nome: ${nome}
      Telefone: ${telefone}
      Email: ${email}
      Necessidade: ${necessidade}
    `,
    replyTo: email // Quando responder, o email será enviado para o usuário
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao enviar o email.' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
