const express = require("express");
const {
  getTours,
  createTour,
  getTour,
  patchTour,
  deleteTour,
} = require("../controllers/tourControllers");

const router = express.Router();

// routers for resource 'tours'
router.route("/").get(getTours).post(createTour);
router.route("/:id").get(getTour).patch(patchTour).delete(deleteTour);

module.exports = router;
