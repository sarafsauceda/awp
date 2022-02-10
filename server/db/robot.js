const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('robots', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
},
  fuelType: {
    type: Sequelize.STRING,
    defaultValue: 'electric',
    values: ['gas', 'diesel', 'electric']
  },
  fuelLevel: {
    type: Sequelize.INTEGER,
    defaultValue: 100,
    validate: {
      min: 0,
      max: 100,
      isDecimal: true,
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://media.istockphoto.com/photos/little-robot-waving-hand-cute-robot-isolated-on-white-background-3d-picture-id1250677553?k=20&m=1250677553&s=170667a&w=0&h=bp1jmhQnsoto6npuqHARe9z5UkZIaF560ScMmxi9CSo='
  }
})
