const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(404).send("Hello from the server side!");
});

app.post("/", (req, res) => {
  res.json({
    message: "This is request for root post!",
    app: "Natours",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
