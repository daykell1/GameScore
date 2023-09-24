const express = require('express');
const router = express.Router();
const { User } = require('./models'); // Importe o modelo User criado anteriormente

// Rota para lidar com o envio do formulário
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Crie um novo registro de usuário no banco de dados
    const user = await User.create({ email, password });

    // Envie uma resposta de sucesso
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    // Lide com erros, por exemplo, usuário já existente
    res.status(400).json({ message: 'Erro ao registrar usuário' });
  }
});

module.exports = router;

// Dentro do código de rota ou controlador
console.log("Dados de login recebidos:", req.body); // Exibe os dados recebidos do formulário

