require('dotenv').config(); // Carregar variáveis de ambiente do .env

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Permitindo que a porta seja configurada via variável de ambiente

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
    // Enviar o e-mail
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).send({ message: 'Erro ao enviar o email.' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
