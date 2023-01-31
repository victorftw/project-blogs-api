const { Router } = require('express');
const validateName = require('../middlewares/validateName');
const validateToken = require('../middlewares/validateToken');
const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/categories', validateToken, categoryController.getAllCategories);

categoryRouter.post(
  '/categories',
  validateToken,
  validateName,
  categoryController.createCategory,
);

module.exports = categoryRouter;
