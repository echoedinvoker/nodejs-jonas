const express = require('express');
const {
  getUsers,
  createUser,
  getUser,
  patchUser,
  deleteUser,
  updateMe,
} = require('../controllers/userControllers');
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  protect,
  updatePassword,
} = require('../controllers/authControllers');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.route('/updatePassword').post(protect, updatePassword);
// router.route('/updateMe').patch(protect, updateMe);
router.patch('/updateMe', protect, updateMe);

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).patch(patchUser).delete(deleteUser);

module.exports = router;
