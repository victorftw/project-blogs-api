const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const postController = require('../controllers/postController');
const validateContent = require('../middlewares/validateContent');

const postRouter = Router();

postRouter.get('/post', validateToken, postController.getAllPosts);

postRouter.get('/post/:id', validateToken, postController.getPostById);

postRouter.post('/post', validateToken, postController.createPost);

postRouter.put('/post/:id', validateToken, validateContent, postController.updatePost);

module.exports = postRouter;
