const morgan = require('morgan');
const express = require('express');
const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userRouters');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorControllers');

const app = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  // if pass any argument to next, it will directly jump to global error handling middleware
  const err = new AppError(
    `Can't find ${req.originalUrl} on this server!`,
    404
  );
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
