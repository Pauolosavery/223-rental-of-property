const userRouter = require('express').Router();
const Cabinet = require('../views/Cabinet');
// const Fav = require('../views/Favorite');
const { Housing, Favorite } = require('../db/models');



userRouter.get('/', (req, res) => {
  res.send('Страница юзер');
})
  .get('/favorite', async (req, res) => {
    const title = 'Избранное';
    const favorites = await Favorite.findAll({ include: { all: true }, raw: true });
    console.log(favorites);

    // res.renderComponent(Fav, { title, favorites });
  })
  .get('/admin', async (req, res) => {
    const title = 'Администратор';
    const {user} = req.session;
    const housings = await Housing.findAll({ include: { all: true }, raw: true });
    res.renderComponent(Cabinet, { title, housings, user });
  });

module.exports = userRouter;
