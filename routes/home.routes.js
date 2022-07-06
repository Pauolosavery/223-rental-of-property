const indexRouter = require('express').Router();
const Home = require('../views/Home');
// const { Entry, User } = require('../db/models');

indexRouter.get('/', async (req, res) => {
  // const user = {
  //   login: 'ADMIN',
  //   email: 'admin@admin',
  //   admin: true,
  //   // admin: false,
  // };
  const user = false;
  const title = 'Домашняя страница';
  res.renderComponent(Home, { title, user });
});

module.exports = indexRouter;
