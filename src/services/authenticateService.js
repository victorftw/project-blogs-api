const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const verifyUser = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email'],
    where: { email, password },
  });

  if (!user) {
    const error = new Error('Invalid fields');
    error.status = 400;
    throw error;
  }

  const token = generateToken(user.dataValues);

  return { token };
};

module.exports = {
  verifyUser,
};
