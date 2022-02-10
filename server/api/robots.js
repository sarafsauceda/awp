const express =  require('express');
const router = express.Router();
const {Robot} = require('../db')

//GET /robots, display all robots

router.get('/', async(req, res, next) => {
  try {
    const robots = await Robot.findAll()
    res.json(robots);
  } catch (err) {
    next(err);
}
  })

module.exports = router;
