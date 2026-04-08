const pool = require('../db/pool');

exports.getAllWorkouts = async () => {
  const result = await pool.query("SELECT * FROM workouts");
  return result.rows;
}