const workoutsModel = require('../models/workouts.model');

exports.getAllWorkouts = async (req, res) => {
  try{
    const workouts = await workoutsModel.getAllWorkouts();
    res.json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.createWorkout = async (req, res) => {
  try{
    const { title, load, reps } = req.body;
    const newWorkout = await workoutsModel.createWorkout(title, load, reps);
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}