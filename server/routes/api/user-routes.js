const router = require('express').Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
  saveItem
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user

// router.route('/').get(getAllUsers).post(createUser).put(authMiddleware, saveBook);

router.route('/').get(getAllUsers).post(createUser).put(authMiddleware, saveItem);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/:username').get(getSingleUser);

router.route('/books/:id').delete(authMiddleware, deleteBook);

module.exports = router;
