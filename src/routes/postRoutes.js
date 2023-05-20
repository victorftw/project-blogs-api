const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const postController = require('../controllers/postController');

const postRouter = Router();

postRouter.get('/post', validateToken, postController.getAllPosts);

postRouter.post('/post', validateToken, postController.createPost);

module.exports = postRouter;
