const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: `${__dirname}/config.env` });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB connection successful!");
  });

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A tour must have a name"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    require: [true, "A tour must have a price"],
  },
});

const Tour = mongoose.model("Tour", tourSchema);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // console.log(`App running on port ${port}...`);
});
