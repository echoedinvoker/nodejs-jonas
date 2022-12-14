const express = require('express');
const { protect, restrictTo } = require('../controllers/authControllers');
const {
  getTours,
  createTour,
  getTour,
  patchTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require('../controllers/tourControllers');

const router = express.Router();

// Alias
router.route('/top-5-cheap').get(aliasTopTours, getTours);

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/').get(protect, getTours).post(createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(patchTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
