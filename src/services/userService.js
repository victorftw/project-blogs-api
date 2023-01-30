const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });

  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email'],
    where: { email, password },
  });

  if (!user) {
    const error = new Error('User already registered');
    error.status = 409;
    throw error;
  }

  const token = generateToken(user.dataValues);

  return { token };
};

const getAllUsers = async () =>
  User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

const getUser = async (id) =>
  User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { id },
  });

module.exports = {
  createUser,
  getAllUsers,
  getUser,
};
