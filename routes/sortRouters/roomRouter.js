const roomRouter = require('express').Router();
// const bcrypt = require('bcrypt');
// const Login = require('../views/Login');

const { Housing } = require('../../db/models');

roomRouter
  .get('/', async (req, res) => {
    const housings = await Housing.findAll({ where: { type_id: 1 }, raw: true });

    console.log(housings);
  });

module.exports = roomRouter;
