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
  const response = await postService.updatePost({ postId: id, title, content });
  return res.status(200).json(response);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await postService.deletePost(id);
    return res.status(204).end();
  } catch ({ message }) {
    return res.status(404).json({ message });
  }
};

const searchPost = async (req, res) => {
  const { q } = req.query;
  const response = await postService.searchPost(q);
  return res.status(200).json(response);
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};
