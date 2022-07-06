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
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
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
        res.json({ status: 'notok', errorMessage: 'Такого пользователя не существует' });
        return;
      }
      const authOk = bcrypt.compare(password, user.password);
      if (!authOk) {
        res.json({ status: 'notok', errorMessage: 'Неверный пароль!' });
        return;
      }
      req.session.user = user;
      res.redirect('/');
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  })
  .get('/logout', async (req, res) => {
    req.session.destroy();
    res.clearCookie('coockie_user_pik');
    res.redirect('/');
  });

module.exports = authRouter;
