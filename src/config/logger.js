const bunyan = require('bunyan');

module.exports = bunyan.createLogger({
  name: 'core_api',
  environment: process.env.NODE_ENV,
  level: process.env.LOG_LEVEL,
  streams: [
    {
      stream: process.stdout,
    },
  ],
});
