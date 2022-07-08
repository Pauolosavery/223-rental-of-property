const router = require('express').Router();

const { Housing } = require('../db/models');

module.exports = router.get('/', async (req, res) => {
  const houses = await Housing.findAll();
  res.send(houses);
});
