const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  // mark Mongoose "CastError" with isOperational
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error: don't leak error details to client
  } else {
    // 1) Log error for developer
    console.error('ERROR: ', err);

    // 2) Send generic message to client(don't leak any error details to client)
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

module.exports = (err, req, res, next) => {
  // default values of err
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    // development mode
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    // production mode
    let error = Object.assign(err);
    if (error.name === 'CastError') error = handleCastErrorDB(error);

    sendErrorProd(error, res);
  }
};
