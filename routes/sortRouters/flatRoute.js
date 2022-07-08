const flatRouter = require('express').Router();
const Flat = require('../../views/sortViews/Flat');

const { Housing } = require('../../db/models');

flatRouter
  .get('/', async (req, res) => {
    const title = 'Квартиры';

    const { user } = req.session;
    const housings = await Housing.findAll({ include: { all: true}, where: {type_id: 2 }, raw: true });

    res.renderComponent(Flat, { title, user, housings });

    console.log(housings);
  });

module.exports = flatRouter;
