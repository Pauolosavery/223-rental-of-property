const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../views/Login');

const Registr = require('../views/Registr');

const { User } = require('../db/models');

authRouter
  .get('/', (req, res) => {
    res.send('Страница authRouter');
  })
  .get('/login', (req, res) => {
    const title = 'Логинизация';
    res.renderComponent(Login, { title });
  })

  .get('/reg', (req, res) => {
    const title = 'Регистрация';
    res.renderComponent(Registr, { title });
  })
  .post('/reg', async (req, res) => {
    try {
      const {
        login, email,

  // .post('/reg', async (req, res) => {
  //   try {
  //     const {
  //       login, password, email, admin,

      } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        res.json({ status: 'notok', errorMessage: 'Пользователь уже зарегистрирован' });
        return;
      }

      const hash = await bcrypt.hash(req.body.password, 10);
      let admin = false;
      if (req.body.checkbox) {
        admin = true;
      }
      await User.create({
        login,
        email,
        password: hash,
        admin,
      });
      res.redirect('/auth/login');


      // const hash = await bcrypt.hash(req.body.password, 10);
      // await User.create({
      //   login,
      //   password: hash,
      //   email,
      //   admin,
      // });
      // res.json({ status: 'ok' });

    } catch (err) {
      res.status(500);
      res.renderComponent(Registr, { errorMessage: err.message })
    }
  })
  .post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        res.renderComponent(Login, { errorMessage: 'Такого пользователя не существует' });
        // res.json({ status: 'notok',  });
        return;
      }
      const authOk = bcrypt.compare(password, user.password);
      if (!authOk) {
        res.json({ status: 'notok', errorMessage: 'Неверный пароль!' });
        return;
      }
      req.session.user = user;

      res.redirect('/');

      // res.json({ status: 'ok' });
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  })
  .get('/logout', async (req, res) => {
    req.session.destroy();

    res.clearCookie('coockie_user_pik');

    // res.clearCookie('user_sid');

    res.redirect('/');
  });

module.exports = authRouter;
