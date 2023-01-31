const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const response = await categoryService.createCategory({ name });
  return res.status(201).json(response);
};

const getAllCategories = async (req, res) => {
  const response = await categoryService.getAllCategories();
  return res.status(200).json(response);
};

module.exports = {
  createCategory,
  getAllCategories,
};
