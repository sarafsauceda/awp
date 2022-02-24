const express = require("express");
const router = express.Router();
const { Restaurant, Neighborhood } = require('../db');

//GET /neighborhoods, display all neighborhoods

router.get('/', async (req, res, next) => {
  try {
    const neighborhoods = await Neighborhood.findAll();
    res.json(neighborhoods);
  } catch (err) {
    next(err);
  }
});


// // POST /neighborhoods create new neighborhood
// router.post("/", async (req, res, next) => {
//   try {
//     const newNeighborhood = await Neighborhood.create(req.body);
//     res.send(newNeighborhood)
//   } catch (error) {
//     next(error);
//   }
// });

// //DELETE /Remove neighborhood
// router.delete('/:id', async (req, res, next) => {
//   try {
//     const neighborhood = await Neighborhood.findByPk(req.params.id);
//     await neighborhood.destroy();
//     res.send(neighborhood);
//   } catch (error) {
//     next(error);
//   }
// });

// // PUT /api/neighborhoods/:id
// router.put('/:neighborhoodId', async (req, res, next) => {
//   try {
//     const neighborhood = await Neighborhood.findByPk(req.params.neighborhoodId);
//     res.send(await neighborhood.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
