const express = require("express");
const router = express.Router();
const { Restaurant, Neighborhood } = require('../db');

//GET /restaurant, display all restaurants

router.get("/", async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (err) {
    next(err);
  }
});


// POST add new restaurant
router.post("/", async (req, res, next) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.send(newRestaurant)
  } catch (error) {
    next(error);
  }
});

//DELETE /Remove restaurant
router.delete("/:id", async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.destroy();
    res.send(restaurant);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
