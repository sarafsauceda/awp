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
router.post('/create', async (req, res, next) => {
  try {
    res.status(201).send(await Robot.create(req.body));
  } catch (error) {
    next(error);
  }
});


//DELETE /Remove robots
router.delete('/:id', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    await robot.destroy();
    res.send(robot);
  } catch (error) {
    next(error);
  }
});

// PUT /api/robots/:id
router.put('/:id', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    res.send(await robot.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;

