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
    const { title, exercises } = req.body;
    const newWorkout = await workoutsModel.createWorkout(title, exercises, req.session.user.id);
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}