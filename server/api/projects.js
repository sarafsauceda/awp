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

// POST /projects create new project
router.post('/', async (req, res, next) => {
  try {
    //res.status(201).send(await Project.create(req.body));
    const newProject = (await Project.create(req.body));
   console.log('newprojects', newProject)
    res.redirect('/projects')
  } catch (error) {
    next(error);
  }
});

//DELETE /Remove projects
router.delete('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.destroy();
    //res.sendStatus(204);
    res.send(project);
  } catch (error) {
    next(error);
  }
});

// PUT /api/projecs/:id
router.put('/:projectId', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    res.send(await project.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
