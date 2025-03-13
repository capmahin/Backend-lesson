const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    error.message = err.message;
    console.error(err);

    //   Mongoose bad ObjectId
    if (err.name === "CastError") {
      const message = "Resource not found";
    }
  } catch (error) {
    next(error);
  }
};
