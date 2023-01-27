const authenticateService = require('../services/authenticateService');

const verifyUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await authenticateService.verifyUser({ email, password });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  verifyUser,
};
