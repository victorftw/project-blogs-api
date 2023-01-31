const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () =>
  BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: ['id', 'name'] },
    ],
  });

module.exports = {
  getAllPosts,
};
