const express = require('express');
const {
  getUsers,
  createUser,
  getUser,
  patchUser,
  deleteUser,
} = require('../controllers/userControllers');
const { signup, login } = require('../controllers/authControllers');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).patch(patchUser).delete(deleteUser);

module.exports = router;
