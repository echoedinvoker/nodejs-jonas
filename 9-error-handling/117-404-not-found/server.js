// setTimeout(() => {
  const dotenv = require('dotenv');

  dotenv.config({ path: `${__dirname}/config.env` });
  const mongoose = require('mongoose');
  const app = require('./app');

  const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('DB connection successful!');
    });

  const port = process.env.PORT || 3000;

  debugger;
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
// }, 15000);
