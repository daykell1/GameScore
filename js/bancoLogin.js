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