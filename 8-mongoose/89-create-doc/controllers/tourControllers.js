const Tour = require('../models/tourModel');

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.patchTour = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
