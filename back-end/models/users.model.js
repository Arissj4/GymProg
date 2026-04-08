const pool = require('../db/pool');

exports.getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

exports.getUserById = async (id) => {
  const result = await pool.query(`SELECT user FROM users where id === ${id}`);
  return result.rows[0];
}

exports.createUser = async (user) => {
  console.log(user)
  const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [user.name, user.email, user.password]);
  return result.rows[0];
}