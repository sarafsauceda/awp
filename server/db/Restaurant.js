const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('restaurants', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
},
  visited: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  type: {
    type: Sequelize.STRING
  }
})
