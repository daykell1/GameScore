const express = require('express');
const app = express();

// Configurações e rotas do servidor aqui...

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const express = require('express');
const router = express.Router();
const { sequelize, ModelName } = require('./models'); // Importe o modelo e o Sequelize aqui

// Rota para buscar dados do banco de dados
router.get('/dados', async (req, res) => {
  try {
    const dados = await ModelName.findAll(); // Substitua ModelName pelo nome do seu modelo
    res.json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados.' });
  }
});

// Outras rotas de manipulação de dados aqui...

module.exports = router;
