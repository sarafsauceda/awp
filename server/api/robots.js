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
      include: Project,
      where: { id: req.params.id },
    });
    res.send(robot);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
