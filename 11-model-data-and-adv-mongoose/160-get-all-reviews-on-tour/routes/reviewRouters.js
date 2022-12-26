const express = require('express');
const { protect, restrictTo } = require('../controllers/authControllers');
const {
  getAllReviews,
  createReview,
} = require('../controllers/reviewControllers');

const router = express.Router({ mergeParams: true });

// router.route('/').get(protect, getAllReviews).post(protect, createReview);
router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), createReview);

module.exports = router;
