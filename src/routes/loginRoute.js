const { Router } = require('express');
const validateLogin = require('../middlewares/validateLogin');
const authController = require('../controllers/authController');

const loginRouter = Router();

loginRouter.post('/login', validateLogin, authController.verifyUser);

module.exports = loginRouter;
