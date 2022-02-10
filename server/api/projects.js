const express =  require('express');
const router = express.Router();
const {Project, Robot} = require('../db')

//GET /projects, display all projects

router.get('/', async(req, res, next) => {
  try {
    const projects = await Project.findAll()
    res.json(projects);
  } catch (err) {
    next(err);
}
  })

  // GET /projects/:projectId

router.get('/:projectId', async (req, res, next) => {
  try {
  const project = await Project.findByPk(req.params.projectId, {
    include: [{ model: Robot}]
  })
  res.json(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
