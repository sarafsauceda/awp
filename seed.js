const { green, red } = require('chalk');
const { db, Project, Robot } = require('./server/db');

const robots = [
  { id: 1, name: 'R2-D2', imageUrl: '/images/r2d2.png' },
  { id: 2, name: 'WALL-E', imageUrl: '/images/walle.jpeg' },
];

// const differentRobots = [
//   {
//     id: 3,
//     name: 'HAL 9000',
//     imageUrl: '/images/HAL-9000.jpeg',
//   },
//   {
//     id: 4,
//     name: 'Bender',
//     imageUrl: '/images/bender.png',
//   },
// ];

const projects = [
  { id: 1, title: 'Build barn', description: 'Lorem Ipsum' },
  { id: 2, title: 'Discover love', completed: true, deadline: '1995' },
  { id: 3, title: 'Open the pod bay doors', priority: 10 },
];

// const differentProjects = [
//   {
//     id: 4,
//     title: 'Fold the laundry',
//   },
//   {
//     id: 5,
//     title: 'Shut down all the garbage compactors',
//   },
// ];

const seed = async () => {
  try {
    await db.sync({ force: true });
      // seed your database here!
    return Robot.bulkCreate(robots)
    .then(() => Project.bulkCreate(projects))
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
