const usersModel = require('../models/users.model');

exports.getAllUsers = async (req, res) => {
  try{
    const users = await usersModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.getUserById = async (req, res) => {
  try{
    const {id} = req.params;
    const user = await usersModel.getUserById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.createUser = async (req, res) => {
  try{
    const newUser = await usersModel.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}