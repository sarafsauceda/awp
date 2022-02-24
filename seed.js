const { db, Neighborhood, Restaurant } = require('./server/db');

const seed = async () => {
  await db.sync({ force: true });

  const northBeach = await Neighborhood.create({
    name: 'North Beach'
  })

  const cowHollow = await Neighborhood.create({
    name: 'Cow Hollow'
  })

  const russianHill = await Neighborhood.create({
    name: 'Russian Hill'
  })

  const ojs = await Restaurant.create({
    name: 'OJs',
    type: 'Italian'
  })

  await ojs.setNeighborhood(northBeach)

  const balboa = await Restaurant.create({
    name: 'Balboa Cafe',
    type: 'American'
  })
  await balboa.setNeighborhood(cowHollow)

  const elephant = await Restaurant.create({
    name: 'Elephant Sushi',
    type: 'Japanese'
  })

  await elephant.setNeighborhood(russianHill)

  db.close();
  console.log(`Seeding successful~`);
}

seed().catch(err => {
  db.close()
  console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `)
})
