const express = require('express');
const routes = require('./routes');
const logger = require('./config/logger');

const app = express();

app.use(routes);

const server = app.listen(process.env.PORT, () => {
  logger.info(`started server on ${process.env.PORT}`);
});

module.exports = server;
