const pool = require('../db/pool');

exports.getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

exports.getUserById = async (id) => {
  const result = await pool.query(`SELECT user FROM users where id === ${id}`);
  return result.rows[0];
}