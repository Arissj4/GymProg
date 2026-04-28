const pool = require('../db/pool');

exports.getAllWorkouts = async () => {
  const result = await pool.query("SELECT * FROM workouts");
  return result.rows;
}

exports.createWorkout = async (title, exercises, userId) => {
  const result = await pool.query("INSERT INTO workouts (title, user_id) VALUES ($1, $2) RETURNING id, title", [title, userId]);

  const workoutId = result.rows[0].id;

  const exercisePromises = exercises.map(exercise =>
    pool.query("INSERT INTO exercises (name, day, sets, reps, rest, note, workout_id) VALUES ($1, $2, $3, $4, $5, $6, $7)", [exercise.name, exercise.day, exercise.sets, exercise.reps, exercise.rest, exercise.note, workoutId])
  );
  await Promise.all(exercisePromises);


  const createdWorkout = result.rows[0];
  const createdExercises = await pool.query("SELECT id, name, day, sets, reps, rest, note FROM exercises WHERE workout_id = $1", [workoutId]);

  return { ...createdWorkout, exercises: createdExercises.rows};
}