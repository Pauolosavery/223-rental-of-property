const entriesRouter = require('express').Router();

module.exports = entriesRouter.get('/', (req, res) => {
  res.send('Страница entriesRouter');
});
