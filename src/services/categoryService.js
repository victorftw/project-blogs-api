const { Category } = require('../models');

const createCategory = async ({ name }) => {
  await Category.create({ name });

  const category = await Category.findOne({
    attributes: ['id', 'name'],
    where: { name },
  });

  return category;
};

const getAllCategories = async () =>
  Category.findAll({
    attributes: ['id', 'name'],
  });

module.exports = {
  createCategory,
  getAllCategories,
};
