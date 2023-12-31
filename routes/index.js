const router = require('express').Router();
const { signinValidation, signupValidation } = require('../middlewares/validation');
const authMiddleware = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { messages } = require('../utils/errors');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', signinValidation, login);
router.post('/signup', signupValidation, createUser);

router.use(authMiddleware);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use((req, res, next) => {
  next(new NotFoundError(messages.notFound));
});

module.exports = router;
