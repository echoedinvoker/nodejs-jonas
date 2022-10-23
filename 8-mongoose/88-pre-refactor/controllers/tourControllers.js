const Tour = require("../models/tourModel");

// Check body for POST request
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Request lack of name or price properties.",
    });
  }

  next();
};

// Router handlers for tours
exports.getTours = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestAt: req.requestTime,
  });
};
exports.getTour = (req, res) => {
  res.status(200).json({
    status: "sucess",
  });
};
exports.createTour = (req, res) => {};

exports.patchTour = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
