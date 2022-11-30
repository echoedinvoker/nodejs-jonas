const express = require('express');
const {
  getUsers,
  createUser,
  getUser,
  patchUser,
  deleteUser,
} = require('../controllers/userControllers');
const { signup } = require('../controllers/authControllers');

const router = express.Router();

router.post('/signup', signup);

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).patch(patchUser).delete(deleteUser);

module.exports = router;
