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
      //need to add this in line 24? as: 'RobotProject'
    })
  res.json(robot);
  } catch (error) {
    next(error);
  }
});

//  const robot = await Robot.findByPk(req.params.robotId, {
//   include: [{ model: Project }]
// })
module.exports = router;

