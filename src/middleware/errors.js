const createError = require('http-errors');
const { logger } = require('../config/logger');

module.exports = (err, req, res, next) => {
  logger.error(err);

  if (err instanceof createError.HttpError) {
    res.status(err.statusCode).json({ error: err.message });
  }

  next(err);
};
