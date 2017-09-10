const { Router } = require('express');
const { searchAction } = require('../actions/organization/organization_search');

const router = Router();

router.get('/search', async (req, res) => {
  const resp = await searchAction(req.query);
  res.json(resp);
});

module.exports = router;
