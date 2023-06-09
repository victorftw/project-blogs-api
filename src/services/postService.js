const { Op } = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../models');

const getAllPosts = async () =>
  BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: ['id', 'name'] },
    ],
  });

const createPost = async ({ userId, title, content, categoryIds }) => {
  if (!title || !content || !categoryIds) {
    throw new Error('Some required fields are missing');
  }
  
  const newPost = await BlogPost.create({ title, content, userId });

  const categories = await Category.findAll({ where: { id: categoryIds } });

  if (categories.length !== categoryIds.length) {
    throw new Error('one or more "categoryIds" not found');
  }

  await PostCategory.bulkCreate(categoryIds.map((category) => ({
      postId: newPost.id,
      categoryId: category,
    })));

  return { id: newPost.id,
    title, 
    content, 
    userId, 
    updated: newPost.updated, 
    published: newPost.published };
};

const getPostById = async (id) => {
  const response = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: ['id', 'name'] },
    ],
  });

  if (!response) {
    throw new Error('Post does not exist');
  }
  
  return response;
};

const updatePost = async ({ postId, title, content }) => {
  await BlogPost.update({ title, content }, {
    where: { id: postId },
  });

  const updatedPost = await BlogPost.findOne({
    where: { id: postId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: ['id', 'name'] },
    ],
  });

  return updatedPost;
};

const deletePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

const searchPost = async (search) => {
  if (search.length === 0) {
    return getAllPosts();
  }

  return (
    BlogPost.findAll({ where: {
        [Op.or]: [
          { content: {
              [Op.like]: `%${search}%`,
            } },
          { title: {
              [Op.like]: `%${search}%`,
            } },
        ] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', attributes: ['id', 'name'] },
      ],
    }) || []);
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};
