const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { Pool } = require('pg');

// Configuração do banco de dados PostgreSQL
const pool = new Pool({
  user: 'postgris',
  host: 'localhost',
  database: 'perfil_usuario',
  password: 'Compre202090@',
  port: 6061,
});

// Rota para upload de imagens
app.post('/upload', upload.single('imagem'), async (req, res) => {
  const { originalname, buffer } = req.file;
  const query = 'INSERT INTO imagens (nome, dados_imagem) VALUES ($1, $2)';
  const values = [originalname, buffer];

  try {
    await pool.query(query, values);
    res.status(200).json({ message: 'Imagem enviada com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao enviar a imagem.' });
  }
});

// Rota para recuperar imagens
app.get('/imagem/:id', async (req, res) => {
  const id = req.params.id;
  const query = 'SELECT dados_imagem FROM imagens WHERE id = $1';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(result.rows[0].dados_imagem);
    } else {
      res.status(404).json({ message: 'Imagem não encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar a imagem.' });
  }
});

// Inicie o servidor na porta desejada
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
