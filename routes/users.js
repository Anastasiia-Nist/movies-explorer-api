const usersRouter = require('express').Router();
const {
  updateProfileValidation,
} = require('../middlewares/validation');
const {
  updateUserProfile,
  getCurrentUser,
} = require('../controllers/users');

usersRouter.get('/me', getCurrentUser);
usersRouter.patch('/me', updateProfileValidation, updateUserProfile);

module.exports = usersRouter;
