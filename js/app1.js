// app.js
const express = require('express');
const app = express();
const sequelize = new Sequelize('GameScore', 'postgres', '2323', {
    host: 'localhost',
    dialect: 'postgres'
  });
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

// Middleware para analisar dados JSON
app.use(bodyParser.json());

// Rotas de autenticação
app.use('/auth', authRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
