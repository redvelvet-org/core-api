const logger = require('../config/logger');

module.exports = (req, res, next) => {
  res.on('finish', () => {
    logger.info(
      {
        remoteAddress: req.ip,
        method: req.method,
        url: req.originalUrl,
        protocol: req.protocol,
        hostname: req.hostname,
        body: req.body,
        query: req.query,
        params: req.params,
        httpVersion: `${req.httpVersionMajor}.${req.httpVersionMinor}`,
        userAgent: req.headers['user-agent'],
        status: res.statusCode,
      },
      'req_logs'
    );
  });
  next();
};
