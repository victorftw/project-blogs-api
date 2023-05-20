const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
  const response = await postService.getAllPosts();
  return res.status(200).json(response);
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const id = res.locals.user;
  try {
    const response = await postService.createPost({ userId: id, title, content, categoryIds });
    console.log(response, '******************');
    return res.status(201).json(response);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
};

module.exports = {
  getAllPosts,
  createPost,
};
