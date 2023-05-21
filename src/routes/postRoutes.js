const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const postController = require('../controllers/postController');
const validateContent = require('../middlewares/validateContent');
const verifyAuthorization = require('../middlewares/verifyAuthorization');

const postRouter = Router();

postRouter.get('/post', validateToken, postController.getAllPosts);

postRouter.get('/post/search', validateToken, postController.searchPost);

postRouter.get('/post/:id', validateToken, postController.getPostById);

postRouter.post('/post', validateToken, postController.createPost);

postRouter.delete('/post/:id', validateToken, 
    verifyAuthorization, postController.deletePost);

postRouter.put('/post/:id', validateToken, verifyAuthorization,
    validateContent, postController.updatePost);

module.exports = postRouter;
