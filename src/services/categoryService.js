const { Category } = require('../models');

const createCategory = async ({ name }) => {
  await Category.create({ name });

  const category = await Category.findOne({
    attributes: ['id', 'name'],
    where: { name },
  });

  return category;
};

module.exports = {
  createCategory,
};
