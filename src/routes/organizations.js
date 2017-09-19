const { Router } = require('express');
const { searchAction } = require('../actions/organization/organization_search');
const { readAction } = require('../actions/organization/organization_read');

const router = Router();

router.get('/search', async (req, res) => {
  const resp = await searchAction(req.query);
  res.json(resp);
});

router.get('/read/:id', async (req, res) => {
  const resp = await readAction(req.params.id);
  if(!resp) res.status(404);
  res.json(resp);
 
});

module.exports = router;
