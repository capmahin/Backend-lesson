const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
  } catch (error) {
    next(error);
  }
};
