// app.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize('GameScore', 'postgres', '2323', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('postgres', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

// Crie um novo usuário
User.create({
    username: 'joao123',
  })
    .then((user) => {
      console.log('Usuário criado:', user.toJSON());
    })
    .catch((error) => {
      console.error('Erro ao criar usuário:', error);
    });
  
