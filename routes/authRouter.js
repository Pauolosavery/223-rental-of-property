const authRouter = require('express').Router();

module.exports = authRouter.get('/', (req, res) => {
  res.send('Страница authRouter');
});
