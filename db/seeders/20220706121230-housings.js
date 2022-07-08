module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Housings', [
      {
        title: 'Спальное кресло', // Наззвание
        price: 265000, // цена
        description: 'Кресло для сна, сдается от 3 до 6 месяцев в зависимости от повторов, правда придётся учиться с 9:00 до 19:00, за то перерыв на обед 1,5 часа.', // описание
        location: 'г.Санкт-Петербург, Кирочная улица, 19', // адрес
        image: 'https://sun9-52.userapi.com/impf/ksNlp7ea2G35oL7d7mKL474jfPdcrg4WmjzVFw/8hf_MWTWGPs.jpg?size=720x1280&quality=95&sign=1b6afb01977b8ba1157cb9ea72e0f992&type=album',
        type_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Дом на Кораблестроителей', // Наззвание
        price: 93221000, // цена
        description: 'Просто целый панельный дом, продаём вместе с жильцами, название улицы говорящее не спроста, можно отправить их стоирть для себя корабли.', // описание
        location: 'г.Санкт-Петербург, улица Кораблестроителей, 35В', // адрес
        image: 'https://cdn.the-village.ru/the-village.ru/post_image-image/Gt0l74NEdljNISd51lXIDw.jpg',
        type_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Квартира на Шотландской', // Наззвание
        price: 25000, // цена
        description: 'В этой комнате вы почувствуете себя шотландцем', // описание
        location: 'г.Санкт-Петербург, Шотландская улица, 1Ж', // адрес
        image: 'https://energy-systems.ru/wp-content/uploads/2016/06/13938200965675_w1920h1440-450x230.jpg',
        type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Квартира на набережной Обводного канала', // Наззвание
        price: 30000, // цена
        description: 'Шикарные апартаменты, на последнем этаже с видом на город', // описание
        location: 'г.Санкт-Петербург, набережная Обводного канала, 17', // адрес
        image: 'https://vesco.ru/wp-content/uploads/2022/07/01-scaled.jpeg',
        type_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Квартира на ул Коли Томчака', // Наззвание
        price: 25000, // цена
        description: 'Большая светлая квартира, барная стойка перетекающая из кухни в гостинную.', // описание
        location: 'г.Санкт-Петербург, улица Коли Томчака, 12-14', // адрес
        image: 'https://cs12.pikabu.ru/post_img/big/2022/03/01/9/1646144996156296996.png',
        type_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Квартирка для Холостяка', // Наззвание
        price: 26000, // цена
        description: 'Евро однушка все в одном месте, спальня, гостинная, кухня зачевм платить больше если все это помещается в одной комнате.', // описание
        location: 'г.Санкт-Петербург, проспект Елизарова, 1', // адрес
        image: 'https://www.belfan.ru/upload/iblock/8bb/14.jpg',
        type_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Заневские задворки', // Наззвание
        price: 1000, // цена
        description: 'Буквально места на одного человека, желательно без вещей, закаулок выглядит как комната для того чтобы спать стоя', // описание
        location: 'г.Санкт-Петербург, Заневский проспект, 71к1', // адрес
        image: 'https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=JiEHkoGWJKYapTNu5r4CsQ&image_size=XXL',
        type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Комната', // Наззвание
        price: 6000, // цена
        description: 'Не смотря на место у нас есть для вас комната, красивый двор и придворовая территория.', // описание
        location: 'г.Санкт-Петербург, просп. Энтузиастов, 53, корп. 2', // адрес
        image: 'https://avatars.mds.yandex.net/get-altay/771751/2a0000015f7c5701e356d8b9e081ee023896/XXXL',
        type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Кравтира Лофт', // Наззвание
        price: 22000, // цена
        description: 'Отличная квартира, для людей ведущих активный образ жизни. Кирпичный дом.', // описание
        location: 'г.Санкт-Петербург, Пискарёвский проспект, 37к2', // адрес
        image: 'https://mebel169.ru/images/contents/articles/idei-dizayna-dlya-gostinoy-v-stile-loft-346121-article-content-main-mob-v1.jpg',
        type_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Будка около башни',
        price: 6000,
        description: 'Замечательная будка чтобы продить в ней лучшие годы своей жизни, нет душа, зато спортзал рядом.',
        location: 'г.Санкт-Петербург, улица Академика Павлова, 3Е',
        image: 'https://static-pano.maps.yandex.ru/v1/?panoid=1254616429_625887188_23_1636792009&size=500%2C240&azimuth=-142.2&tilt=10&api_key=maps&signature=pv9QWT3RZZfAWh1Clljy6xXeekAePz4wmC3Ji-zbrfs=',
        type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
      {
        title: 'Команта на Васильевском острове',
        price: 12000,
        description: 'Замечательная команата чтобы продить в ней лучшие годы свою тленную жизни, все 10кв.м, зато высокие потолки, но нет душа, зато спортзал рядом.',
        location: 'г.Санкт-Петербург, 14-я линия В.О., дом 666, кв 13',
        image: 'https://3dlancer.net/upload/galleries/913/5913/duplex-apartment-112319-xxl.jpg',
        type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Квартира в Кудрово',
        price: 12000,
        description: 'Мини квартира чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме.',
        location: 'Ленинградская область, Заневское городское поселение, Кудрово, Итальянский переулок, дом 4, кв 666',
        image: 'https://f9.mirkvartir.me/custom/9d/9db43222-1648-43af-9dd1-079a5420ab15.jpg',
        type_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Дом во Всеволожске',
        price: 33345000,
        description: 'Мини Дом чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме.',
        location: 'Ленинградская область, г. Всеволожск, Армянский переулок, дом 12',
        image: 'https://allpans.ru/wp-content/uploads/2018/11/22a-850x450.jpg',
        type_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Housings', null, { restartIdentity: true, truncate: true });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
