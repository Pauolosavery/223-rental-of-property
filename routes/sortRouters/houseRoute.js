const houseRouter = require('express').Router();
const House = require('../../views/sortViews/House');

const { Housing } = require('../../db/models');

houseRouter
  .get('/', async (req, res) => {
    const title = 'Дома';
    const {user} = req.session;

    const housings = await Housing.findAll({ include: { all: true }, where: { type_id: 3 }, raw: true });

    res.renderComponent(House, { title, housings, user });
    console.log(housings);
  })

  module.exports = houseRouter;
