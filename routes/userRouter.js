const userRouter = require('express').Router();
const Cabinet = require('../views/Cabinet');
const Fav = require('../views/Fav');
const { Housing, Favorite } = require('../db/models');

userRouter.get('/', (req, res) => {
  res.send('Страница юзер');
})
  .get('/favorite', async (req, res) => {
    const title = 'Избранное';
    const { user } = req.session;
    const us_id = user.id;

    console.log(us_id, '++++++++++++++++++++++++++');
    const favorites = await Favorite.findAll({
      include: { all: true },
      where: {
        user_id: us_id,
      },
      raw: true,
    });
    console.log('++++++++++++++++++++++++++', favorites);

    res.renderComponent(Fav, { title, user, favorites });
  })
  .get('/admin', async (req, res) => {
    const title = 'Администратор';


    const {user} = req.session;
    const housings = await Housing.findAll({ include: { all: true }, raw: true });
    res.renderComponent(Cabinet, { title, housings, user });

  });

module.exports = userRouter;
