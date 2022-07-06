const tagRouter = require('express').Router();

module.exports = tagRouter.get('/', (req, res) => {
  res.send('Страница Тэгроутер');
});
