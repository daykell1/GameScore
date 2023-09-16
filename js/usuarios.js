const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('GameScore', 'postgres', '2323', {
  host: 'localhost',
  dialect: 'postgres', // Ou o dialect do seu banco de dados
});

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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
