const express =  require('express');
const router = express.Router();
const {Robot, Project} = require('../db')

//GET /robots, display all robots

router.get('/', async(req, res, next) => {
  try {
    const robots = await Robot.findAll()
    res.json(robots);
  } catch (err) {
    next(err);
}
  })

// GET /robots/:robotId

router.get('/:robotId', async (req, res, next) => {
  try {
    const robot = await Robot.findOne({
      where: {
        id: req.params.robotId
      },
      include: [ { model: Project }]
      
    })
  res.json(robot);
  } catch (error) {
    next(error);
  }
});

// POST /robots create new robot
router.post('/', async (req, res, next) => {
  const name = req.body.name
  try {
    const newRobot = await Robot.create(
      { name: name }
      )
      console.log('new robot', newRobot)
  } catch (error) {
    next(error);
  }
});

// const newEmailRecord = await EBookSignup.create({ email: email });
//         console.log(newEmailRecord);
//         res.status(201).end(); // Successful signup!
//need to add this in line 24? as: 'RobotProject'

//  const robot = await Robot.findByPk(req.params.robotId, {
//   include: [{ model: Project }]
// })

// res.status(201).send(await Robot.create(req.body));
// const newRobot = await Robot.create({
//   robotName: robotName
module.exports = router;

