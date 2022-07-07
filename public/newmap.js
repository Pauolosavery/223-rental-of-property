// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

const placemarks = [
  {
    coordinate: [59.9766010607149,30.320776827761097],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Квартира студия"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://b4.3ddd.ru/media/gallery_images/5ab62bae40b7d.jpeg" height="200" width="200"> <br/> '
    + '<a href="#">65.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },
  {
    coordinate: [59.977805547136875,30.42171371740955],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
    + '<a href="#">265.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },
  {
    coordinate: [59.952071599651646, 30.49672973913806],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
    + '<a href="#">265.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },
  {
    coordinate: [59.93303796099323, 30.439394839235725],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
    + '<a href="#">265.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },
  {
    coordinate: [59.898560048905345, 30.428236849733768],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
    + '<a href="#">265.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },
  {
    coordinate: [59.890107479004826, 30.326956637331424],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
    + '<a href="#">265.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },
  {
    coordinate: [59.91774005705043, 30.383326400964247],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
    + '<a href="#">265.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },

  {
    coordinate: [59.90447455002357, 30.24638117973848],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
    + '<a href="#">265.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },
  {
    coordinate: [59.95599652580831, 30.222005264211138],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
    + '<a href="#">265.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },
  {
    coordinate: [59.94367702670159, 30.360418754060603],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
    + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
    + '<a href="#">265.000rub</a><br/>'],
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  },
  {
    coordinate: [59.92289616454641, 30.31558914418028],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Команта на Московской"</a><br>'
          + '<span class="description">г.Санкт-Петербург, Московский пр., дом 13, кв 666 </span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://cs8.pikabu.ru/post_img/big/2017/02/03/1/1486074573111223453.jpg" height="200" width="200"> <br/> '
          + '<a href="#">15000 руб.</a><br/>'
          + '<b>Замечательная команата чтобы продить в ней лучшие годы свою тленную жизни, все 10кв.м, зато высокие потолки, но нет душа, зато спортзал рядом.</b> <br/>'],
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Команта на Московской',
  }, {
    coordinate: [59.93480091192818, 30.274280193115192],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Команта на Васильевском острове"</a><br>'
          + '<span class="description">г.Санкт-Петербург, 14-я линия В.О., дом 666, кв 13</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://cs8.pikabu.ru/post_img/big/2017/02/03/1/1486074573111223453.jpg" height="200" width="200"> <br/> '
          + '<a href="#">12000 руб.</a><br/>'
          + '<b>Замечательная команата чтобы продить в ней лучшие годы свою тленную жизни, все 10кв.м, зато высокие потолки, но нет душа, зато спортзал рядом.</b> <br/>'],
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Команта на Васильевском острове',
  }, {
    coordinate: [59.90744222792726, 30.511702095409614],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Квартира в Кудрово"</a><br>'
          + '<span class="description">Ленинградская область, Заневское городское поселение, Кудрово, Итальянский переулок, дом 4, кв 666</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://f9.mirkvartir.me/custom/9d/9db43222-1648-43af-9dd1-079a5420ab15.jpg" height="200" width="200"> <br/> '
          + '<a href="#">12000 руб.</a><br/>'
          + '<b>Мини квартира чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме..</b> <br/>'],
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Квартира в Кудрово',
  }, {
    coordinate: [59.998782564109106, 30.659698499999966],
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Дом во Всеволожске"</a><br>'
          + '<span class="description">Ленинградская область, г. Всеволожск, Армянский переулок, дом 12</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: ['<img src="https://allpans.ru/wp-content/uploads/2018/11/22a-850x450.jpg" height="200" width="200"> <br/> '
          + '<a href="#">33345000 руб.</a><br/>'
          + '<b>Мини Дом чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в нём.</b> <br/>'],
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Дом во Всеволожске',
  },
];

function init() {
  // Создание карты.
  const myMap = new ymaps.Map(
    'map',
    {
      center: [59.94367702670159, 30.360418754060603],
      zoom: 12,
      controls: ['fullscreenControl'],
    },
    {
      // restrictMapArea: [
      //   [59.700, 29.511],
      //   [60.180, 30.829],
      // ],
      yandexMapDisablePoiInteractivity: true,
    },
  );

  placemarks.forEach((obj) => {
    const Placemark = new ymaps.Placemark(obj.coordinate, {
      balloonContentHeader: obj.balloonContentHeader,
      balloonContentBody: obj.balloonContentBody.join(''),
      balloonContentFooter: obj.balloonContentFooter,
      hintContent: obj.hintContent,
    }, {
      preset: 'islands#redHomeIcon',
      iconColor: '#8b00ff',
    });
    myMap.geoObjects.add(Placemark);
  });
}
