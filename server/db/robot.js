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
    values: ['gas, diesel, electric'],
    defaultValue: 'electric',
    },

  fuelLevel: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 100,
      isDecimal: true,
    },
    defaultValue: 100,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i6nZestIrwlw/v1/1200x-1.jpg'
  },
});
