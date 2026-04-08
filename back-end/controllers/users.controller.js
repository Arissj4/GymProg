const usersModel = require('../models/users.model');

exports.getAllUsers = async (req, res) => {
  try{
    const users = await usersModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.getUserById = async (req, res) => {
  try{
    const {id} = req.params;
    const user = await usersModel.getUserById(id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}