const { Router } = require('express');
const userController = require('../controllers/userController');
const validateNewUser = require('../middlewares/validateNewUser');

const userRouter = Router();

userRouter.post('/user', validateNewUser, userController.createUser);

module.exports = userRouter;
