// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.create({ email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao registrar o usuário.' });
  }
});

module.exports = router;


// routes/auth.js
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      
      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
      }
      
      if (user.password !== password) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
      }
      
      // Autenticação bem-sucedida
      res.status(200).json({ message: 'Login bem-sucedido.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao fazer login.' });
    }
  });
  