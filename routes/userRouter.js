const userRouter = require('express').Router();

module.exports = userRouter.get('/', (req, res) => {
  res.send('Страница юзер');
});
