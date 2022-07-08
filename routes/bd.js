const bdRouter = require('express').Router();

const { Housing } = require('../db/models');

module.exports = bdRouter.get('/', async (req, res) => {
  // console.log('🚀 ~ file: bd.js ~ line 6 ~ module.exports=router.get ~ req', req);

  const houses = await Housing.findAll();
  res.send(houses);
})
  .post('/', async (req, res) => {
    // console.log('🚀 ~ file: bd.js ~ line 13 ~ .post ~ req.body', req.body);
    await Housing.create(req.body);
    res.redirect('/');
  });
