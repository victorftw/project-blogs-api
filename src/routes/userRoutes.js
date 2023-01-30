const { Router } = require('express');
const userController = require('../controllers/userController');
const validateNewUser = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');

const userRouter = Router();

userRouter.get('/user', validateToken, userController.getAllUsers);

userRouter.post('/user', validateNewUser, userController.createUser);

module.exports = userRouter;
