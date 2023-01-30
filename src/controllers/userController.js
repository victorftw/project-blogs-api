const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(409).json({ message: 'User already registered' });
  }
};

module.exports = {
  createUser,
};
