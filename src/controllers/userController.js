const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(409).json({ message: 'User already registered' });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUser(id);
    return res.status(200).json(user.dataValues);
  } catch (error) {
    return res.status(404).json({ message: 'User does not exist' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
};
