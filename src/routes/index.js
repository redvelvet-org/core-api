const { Router } = require('express');
const organizations = require('./organizations');

const router = new Router();

const v1 = new Router().use('/organizations', organizations);

router.get('/health', (req, res) => {
  res.status(200).send('OK');
});

router.use('/v1', v1);

module.exports = router;
