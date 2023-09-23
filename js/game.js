const Sequelize = require('sequelize');
const sequelize = new Sequelize('GameScore', 'postgres', '2323', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('game', {
  game1: {
    type: Sequelize.STRING
  },
  game2: {
    type: Sequelize.STRING
  },
  game3: {
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
    game1: 'mario',
  })
    .then((user) => {
      console.log('Usuário criado:', user.toJSON());
    })
    .catch((error) => {
      console.error('Erro ao criar usuário:', error);
    });
  
