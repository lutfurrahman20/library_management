import { ErrorRequestHandler } from 'express';

export const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500; 
  let message = 'Something went wrong';

  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation failed';
  } else if (err.statusCode) {
    statusCode = err.statusCode;
  }

  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: process.env.NODE_ENV === 'production' ? undefined : err,
  });
};
