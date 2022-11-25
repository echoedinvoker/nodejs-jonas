module.exports = (err, req, res, next) => {
  // present error stack in the console
  console.log(err.stack);

  // default values of err
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // response error to client just like before we did
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
