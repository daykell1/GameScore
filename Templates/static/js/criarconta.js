const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Adicione as configurações do Sequelize e do modelo 'User' aqui

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para processar o formulário de criação de conta
app.post('/criar-conta', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validação: verifique se todos os campos estão preenchidos
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: 'Preencha todos os campos corretamente.' });
    }

    // Use o modelo 'User' e o Sequelize para criar um novo usuário no banco de dados
    const newUser = await User.create({
      Teste1: username, // Certifique-se de ajustar isso com base na estrutura do seu modelo 'User'
      Teste2: email,
      Teste3: password,
    });

    // Envie uma resposta de sucesso
    return res.status(201).json({ success: true, message: 'Conta criada com sucesso!', user: newUser });
  } catch (error) {
    console.error('Erro ao criar conta:', error);
    return res.status(500).json({ success: false, message: 'Erro ao criar conta.' });
  }
});

// Adicione outras rotas e configurações do Express aqui

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
