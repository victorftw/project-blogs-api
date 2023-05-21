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
    return res.status(201).json(response);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await postService.getPostById(id);
    return res.status(200).json(response);
  } catch ({ message }) {
    return res.status(404).json({ message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = res.locals.user;
  try {
    const response = await postService.updatePost({ userId, postId: id, title, content });
    return res.status(200).json(response);
  } catch ({ message }) {
    return res.status(401).json({ message });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
};
