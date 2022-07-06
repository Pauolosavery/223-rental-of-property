const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
  res.send('Страница юзер');
})
  .get('/favorite', (req, res) => {
    res.send('Страница с любимыми ссылками юзера');
  })
  .get('/admin', (req, res) => {
    res.send('Странница Админа');
  });

module.exports = userRouter;
