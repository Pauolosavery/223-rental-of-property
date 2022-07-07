const flatRouter = require('express').Router();
const Flat = require('../../views/sortViews/Flat');

const { Housing } = require('../../db/models');

flatRouter
  .get('/', async (req, res) => {
    const title = 'Квартиры';
    const housings = await Housing.findAll({ include: { all: true}, where: {type_id: 2 }, raw: true });

    res.renderComponent(Flat, { title, housings });
    console.log(housings);
  });

module.exports = flatRouter;
