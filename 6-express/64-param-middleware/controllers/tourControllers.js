const fs = require("fs");

// Sychronous read file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// Param middleware(function part) for 'id' check
exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: `ID:${val} is invalid.`,
    });
  }

  next();
};

// Router handlers for tours
exports.getTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: "sucess",
    requestAt: req.requestTime,
    data: {
      tours: tours,
    },
  });
};
exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: "sucess",
    data: {
      tour,
    },
  });
};
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify([...tours, newTour]),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};
exports.patchTour = (req, res) => {
  const id = req.params.id * 1;

  const tour = Object.assign(
    tours.find((el) => el.id === id),
    req.body
  );

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};
exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;

  res.status(204).json({
    status: "success",
    data: null,
  });
};
