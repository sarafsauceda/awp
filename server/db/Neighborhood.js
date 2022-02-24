const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('neighborhoods', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true
    }
}
})
