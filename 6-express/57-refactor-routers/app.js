const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getTours = (req, res) => {
  res.status(200).json({
    status: "sucess",
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

// app.get("/api/v1/tours", getTours);
// app.get("/api/v1/tours/:id", getTour);
// app.post("/api/v1/tours", createTour);
// app.patch("/api/v1/tours/:id", patchTour);
// app.delete("/api/v1/tours/:id", deleteTour);

app.route("/api/v1/tours").get(getTours).post(createTour);
app.route("/api/v1/tours/:id").get(getTour).patch(patchTour).delete(deleteTour);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
