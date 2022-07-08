const roomRouter = require('express').Router();
const Room = require('../../views/sortViews/Room');

const { Housing } = require('../../db/models');

roomRouter
  .get('/', async (req, res) => {
    const title = 'Комнаты';
    const {user} = req.session;
    const housings = await Housing.findAll({ include: { all: true }, where: { type_id: 1 }, raw: true });

    res.renderComponent(Room, { title, user, housings });
    console.log(housings);
  });

module.exports = roomRouter;
