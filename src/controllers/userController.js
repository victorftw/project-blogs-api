const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(409).json({ message: 'User already registered' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
