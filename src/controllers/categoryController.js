const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const response = await categoryService.createCategory({ name });
  return res.status(201).json(response);
};

module.exports = {
  createCategory,
};
