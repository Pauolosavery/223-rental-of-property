const flatRouter = require('express').Router();
// const bcrypt = require('bcrypt');
// const Login = require('../views/Login');

const { Housing } = require('../../db/models');

flatRouter
  .get('/', async (req, res) => {
    const housings = await Housing.findAll({ where: { type_id: 2 }, raw: true });

    console.log(housings);
  });

module.exports = flatRouter;
