const homeRouter = require('express').Router();

module.exports = homeRouter.get('/', (req, res) => {
  res.send('Страница дом');
});
