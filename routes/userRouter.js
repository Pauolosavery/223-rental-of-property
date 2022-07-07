const userRouter = require('express').Router();
const Admin = require('../views/Admin');
const Favorite = require('../views/Favorite');
const { Housing } = require('../db/models');


userRouter.get('/', (req, res) => {
  res.send('Страница юзер');
})
  .get('/favorite', async (req, res) => {
    const title = 'Избранное';
    const housings = await Housing.findAll({ include: { all: true }, raw: true });

    res.renderComponent(Favorite, { title, housings });
  })
  .get('/admin', async (req, res) => {
    const title = 'Администратор';
    const housings = await Housing.findAll({ include: { all: true }, raw: true });

    res.renderComponent(Admin, { title, housings });
  });

module.exports = userRouter;
