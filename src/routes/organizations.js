const { Router } = require('express');
const { bodyParser } = require('body-parser');
const { searchAction } = require('../actions/organization/organization_search');
const { readAction } = require('../actions/organization/organization_read');
const { createAction } = require('../actions/organization/organization_create');

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/search', async (req, res) => {
  const resp = await searchAction(req.query);
  res.json(resp);
});

router.get('/read/:id', async (req, res) => {
  const resp = await readAction(req.params.id);
  if(!resp) res.status(404);
  res.json(resp);
 
});


router.post('/create', async (req, res) => {
  const oname=req.body.name;
  const resp = await createAction(oname);
  res.json(resp);
});

module.exports = router;
