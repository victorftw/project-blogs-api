const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const postController = require('../controllers/postController');

const postRouter = Router();

postRouter.get('/post', validateToken, postController.getAllPosts);

module.exports = postRouter;
