'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Housings', [
      {
        title: 'Команта на Московской',
        price: 15000,
        description: 'Замечательная команата чтобы продить в ней лучшие годы свою тленную жизни, все 10кв.м, зато высокие потолки, но нет душа, зато спортзал рядом.',
        location: 'г.Санкт-Петербург, Московский пр., дом 13, кв 666',
        image: 'https://cs8.pikabu.ru/post_img/big/2017/02/03/1/1486074573111223453.jpg',
        type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //   {
    //   title: 'Команта на Васильевском острове',
    //   price: 12000,
    //   description: 'Замечательная команата чтобы продить в ней лучшие годы свою тленную жизни, все 10кв.м, зато высокие потолки, но нет душа, зато спортзал рядом.',
    //   location: 'г.Санкт-Петербург, 14-я линия В.О., дом 666, кв 13',
    //   image: 'https://cs8.pikabu.ru/post_img/big/2017/02/03/1/1486074573111223453.jpg',
    //   type_id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   title: 'Квартира в Кудрово',
    //   price: 12000,
    //   description: 'Мини квартира чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме.',
    //   location: 'Ленинградская область, Заневское городское поселение, Кудрово, Итальянский переулок, дом 4, кв 666',
    //   image: 'https://f9.mirkvartir.me/custom/9d/9db43222-1648-43af-9dd1-079a5420ab15.jpg',
    //   type_id: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   title: 'Дом во Всеволожске',
    //   price: 33345000,
    //   description: 'Мини квартира чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме.',
    //   location: 'Ленинградская область, г. Всеволожск, Армянский переулок, дом 12',
    //   image: 'https://allpans.ru/wp-content/uploads/2018/11/22a-850x450.jpg',
    //   type_id: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }
  ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Housings', null, { restartIdentity: true, truncate: true });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
