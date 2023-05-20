const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const postController = require('../controllers/postController');

const postRouter = Router();

postRouter.get('/post', validateToken, postController.getAllPosts);

postRouter.get('/post/:id', validateToken, postController.getPostById);

postRouter.post('/post', validateToken, postController.createPost);

module.exports = postRouter;
