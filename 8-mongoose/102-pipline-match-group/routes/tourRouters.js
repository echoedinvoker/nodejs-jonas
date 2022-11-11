const express = require('express');
const {
  getTours,
  createTour,
  getTour,
  patchTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
} = require('../controllers/tourControllers');

const router = express.Router();

// Alias
router.route('/top-5-cheap').get(aliasTopTours, getTours);

router.route('/tour-stats').get(getTourStats);

router.route('/').get(getTours).post(createTour);
router.route('/:id').get(getTour).patch(patchTour).delete(deleteTour);

module.exports = router;
