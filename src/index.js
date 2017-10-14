const express = require('express');
const routes = require('./routes');
const logger = require('./config/logger');
const { errors, accessLog } = require('./middleware');

const app = express();

app.use(accessLog);
app.use(routes);

const server = app.listen(process.env.PORT, () => {
  logger.info(`started server on ${process.env.PORT}`);
});

app.use(errors);
module.exports = server;
