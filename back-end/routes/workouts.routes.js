const express = require('express');
const router = express.Router();
const workoutsController = require('../controllers/workouts.controller');

router.get('/', workoutsController.getAllWorkouts);
router.post('/', workoutsController.createWorkout);

module.exports = router;