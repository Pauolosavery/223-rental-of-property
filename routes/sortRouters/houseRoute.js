const houseRouter = require('express').Router();
// const bcrypt = require('bcrypt');
// const Login = require('../views/Login');

const { Housing } = require('../../db/models');

houseRouter
  .get('/', async (req, res) => {
    const housings = await Housing.findAll({ where: { type_id: 3 }, raw: true });
    
    console.log(housings);
  })

  module.exports = houseRouter;