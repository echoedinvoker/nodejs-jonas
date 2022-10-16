const morgan = require("morgan");
const fs = require("fs");
const express = require("express");
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from a middleware :)");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

// Sychronous read file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// Router handlers for tours
const getTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: "sucess",
    requestAt: req.requestTime,
    data: {
      tours: tours,
    },
  });
};
const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  res.status(200).json({
    status: "sucess",
    data: {
      tour,
    },
  });
};
const createTour = (req, res) => {
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
const patchTour = (req, res) => {
  const id = req.params.id * 1;

  if (id > tours.length)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

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
const deleteTour = (req, res) => {
  const id = req.params.id * 1;

  if (id > tours.length)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  res.status(204).json({
    status: "success",
    data: null,
  });
};

// Router handlers for Users
const getUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This router is not defined yet!",
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This router is not defined yet!",
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This router is not defined yet!",
  });
};

const patchUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This router is not defined yet!",
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This router is not defined yet!",
  });
};

// routers for resource 'tours'
app.route("/api/v1/tours").get(getTours).post(createTour);
app.route("/api/v1/tours/:id").get(getTour).patch(patchTour).delete(deleteTour);

// routers for resource 'users'
app.route("/api/v1/users").get(getUsers).post(createUser);
app.route("/api/v1/users/:id").get(getUser).patch(patchUser).delete(deleteUser);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
