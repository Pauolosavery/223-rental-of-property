const userRouter = require('express').Router();
const Admin = require('../views/Admin');
const Favorite = require('../views/Favorite');

userRouter.get('/', (req, res) => {
  res.send('Страница юзер');
})
  .get('/favorite', (req, res) => {
    const title = 'Избранное';
    const housings = [{
      title: 'Команта на Васильевском острове',
      price: 12000,
      description: 'Замечательная команата чтобы продить в ней лучшие годы свою тленную жизни, все 10кв.м, зато высокие потолки, но нет душа, зато спортзал рядом.',
      location: 'г.Санкт-Петербург, 14-я линия В.О., дом 666, кв 13',
      image: 'https://cs8.pikabu.ru/post_img/big/2017/02/03/1/1486074573111223453.jpg',
      type_id: 1,
    },
    {
      title: 'Квартира в Кудрово',
      price: 12000,
      description: 'Мини квартира чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме.',
      location: 'Ленинградская область, Заневское городское поселение, Кудрово, Итальянский переулок, дом 4, кв 666',
      image: 'https://f9.mirkvartir.me/custom/9d/9db43222-1648-43af-9dd1-079a5420ab15.jpg',
      type_id: 2,
    },
    {
      title: 'Дом во Всеволожске',
      price: 33345000,
      description: 'Мини квартира чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме.',
      location: 'Ленинградская область, г. Всеволожск, Армянский переулок, дом 12',
      image: 'https://allpans.ru/wp-content/uploads/2018/11/22a-850x450.jpg',
      type_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    res.renderComponent(Favorite, { title, housings });
  })
  .get('/admin', (req, res) => {
    const title = 'Администратор';
    const housings = [{
      title: 'Команта на Васильевском острове',
      price: 12000,
      description: 'Замечательная команата чтобы продить в ней лучшие годы свою тленную жизни, все 10кв.м, зато высокие потолки, но нет душа, зато спортзал рядом.',
      location: 'г.Санкт-Петербург, 14-я линия В.О., дом 666, кв 13',
      image: 'https://cs8.pikabu.ru/post_img/big/2017/02/03/1/1486074573111223453.jpg',
      type_id: 1,
    },
    {
      title: 'Квартира в Кудрово',
      price: 12000,
      description: 'Мини квартира чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме.',
      location: 'Ленинградская область, Заневское городское поселение, Кудрово, Итальянский переулок, дом 4, кв 666',
      image: 'https://f9.mirkvartir.me/custom/9d/9db43222-1648-43af-9dd1-079a5420ab15.jpg',
      type_id: 2,
    },
    {
      title: 'Дом во Всеволожске',
      price: 33345000,
      description: 'Мини квартира чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме.',
      location: 'Ленинградская область, г. Всеволожск, Армянский переулок, дом 12',
      image: 'https://allpans.ru/wp-content/uploads/2018/11/22a-850x450.jpg',
      type_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    res.renderComponent(Admin, { title, housings });
  });

module.exports = userRouter;
