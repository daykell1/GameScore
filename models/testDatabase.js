const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados bem-sucedida.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

testDatabaseConnection();
