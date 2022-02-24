const db = require('./database')
const Restaurant = require('./Restaurant')
const Neighborhood = require('./Neighborhood')

Restaurant.belongsTo(Neighborhood)
Neighborhood.hasMany(Restaurant)

module.exports = {
  db,
  Restaurant,
  Neighborhood,
}
