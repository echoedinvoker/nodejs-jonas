const express = require("express");
const {
  getTours,
  createTour,
  getTour,
  patchTour,
  deleteTour,
  checkID,
  checkBody,
} = require("../controllers/tourControllers");

const router = express.Router();

router.param("id", checkID);

// Create a checkBody middleware
// Check if body contains the name and price properties
// If not, send back 400 (bad request)
// Add it to the post handler stack
router.route("/").get(getTours).post(checkBody, createTour);
router.route("/:id").get(getTour).patch(patchTour).delete(deleteTour);

module.exports = router;
