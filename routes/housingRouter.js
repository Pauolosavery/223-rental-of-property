const entriesRouter = require('express').Router();
const AddApart = require('../views/AddApart');

module.exports = entriesRouter.get('/', (req, res) => {
  const { user } = req.session;
  const title = "Добавление ренты";
  res.renderComponent(AddApart, { title, user });
});
