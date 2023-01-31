const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
  const response = await postService.getAllPosts();
  console.log(response);
  return res.status(200).json(response);
};

module.exports = {
  getAllPosts,
};
