const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('GameScore', 'postgres', '2323', {
  host: 'localhost',
  dialect: 'postgres', // Ou o dialect do seu banco de dados
});

const Usuario = sequelize.define('Usuario', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
});

(async () => {
  try {
    await sequelize.sync(); // Isso criará a tabela se não existir
    console.log('Tabela "Usuarios" criada com sucesso.');
  } catch (error) {
    console.error('Erro ao criar a tabela "Usuarios":', error);
  } finally {
    await sequelize.close(); // Feche a conexão com o banco de dados quando terminar
  }
})();
