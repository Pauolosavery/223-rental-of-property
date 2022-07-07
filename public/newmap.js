// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  const myMap = new ymaps.Map(
    // ID DOM-элемента, в который будет добавлена карта.
    'map',
    // Параметры карты.
    {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    // Географические координаты центра отображаемой карты.
      center: [59.94367702670159, 30.360418754060603],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 13,
      controls: ['fullscreenControl'],
      // Тип покрытия карты: "Спутник".
      // type: 'yandex#satellite', 'yandex#hybrid' ,
    },
    {
      // зададим ограниченную область прямоугольником,
      // restrictMapArea: [
      //   [59.700, 29.511],
      //   [60.180, 30.829],
      // ],
      //
      // убирает интерактивность карты, некликабельными становятся иконки, но остаются на месте.
      yandexMapDisablePoiInteractivity: true,
    },
  );
  // ******** Крутая кнопка с открытым видом:*******************************************************
  const elbrus = new ymaps.Placemark(myMap.getCenter(), {
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Elbrus Bootcamp"</a><br>'
        + '<span class="description">Школа программирования</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="https://elbrus-bootcamp.github.io/Elbrus-Bootcamp/sharing_logo.jpg" height="200" width="200"> <br/> '
        + '<a href="#">265.000rub</a><br/>',
    // + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Elbrus Bootcamp',
  }, {
    // preset: 'islands#circleHomeIcon',
    preset: 'islands#redHomeIcon',
    // цвет иконки
    iconColor: '#8b00ff',
  });

  const room1 = new ymaps.Placemark([59.92289616454641, 30.31558914418028], {
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Команта на Московской"</a><br>'
        + '<span class="description">г.Санкт-Петербург, Московский пр., дом 13, кв 666 </span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="https://cs8.pikabu.ru/post_img/big/2017/02/03/1/1486074573111223453.jpg" height="200" width="200"> <br/> '
        + '<a href="#">15000 руб.</a><br/>'
        + '<b>Замечательная команата чтобы продить в ней лучшие годы свою тленную жизни, все 10кв.м, зато высокие потолки, но нет душа, зато спортзал рядом.</b> <br/>',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Команта на Московской',
  }, {
    // preset: 'islands#circleHomeIcon',
    preset: 'islands#redHomeIcon',
    // цвет иконки
    iconColor: '#8b00ff',
  });
  const room2 = new ymaps.Placemark([59.93480091192818, 30.274280193115192], {
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Команта на Васильевском острове"</a><br>'
        + '<span class="description">г.Санкт-Петербург, 14-я линия В.О., дом 666, кв 13</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="https://cs8.pikabu.ru/post_img/big/2017/02/03/1/1486074573111223453.jpg" height="200" width="200"> <br/> '
        + '<a href="#">12000 руб.</a><br/>'
        + '<b>Замечательная команата чтобы продить в ней лучшие годы свою тленную жизни, все 10кв.м, зато высокие потолки, но нет душа, зато спортзал рядом.</b> <br/>',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Команта на Васильевском острове',
  }, {
    // preset: 'islands#circleHomeIcon',
    preset: 'islands#redHomeIcon',
    // цвет иконки
    iconColor: '#8b00ff',
  });

  const room3 = new ymaps.Placemark([59.90744222792726, 30.511702095409614], {
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Квартира в Кудрово"</a><br>'
        + '<span class="description">Ленинградская область, Заневское городское поселение, Кудрово, Итальянский переулок, дом 4, кв 666</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="https://f9.mirkvartir.me/custom/9d/9db43222-1648-43af-9dd1-079a5420ab15.jpg" height="200" width="200"> <br/> '
        + '<a href="#">12000 руб.</a><br/>'
        + '<b>Мини квартира чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в доме..</b> <br/>',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Квартира в Кудрово',
  }, {
    // preset: 'islands#circleHomeIcon',
    preset: 'islands#redHomeIcon',
    // цвет иконки
    iconColor: '#8b00ff',
  });

  const room4 = new ymaps.Placemark([59.998782564109106, 30.659698499999966], {
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">"Дом во Всеволожске"</a><br>'
        + '<span class="description">Ленинградская область, г. Всеволожск, Армянский переулок, дом 12</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="https://allpans.ru/wp-content/uploads/2018/11/22a-850x450.jpg" height="200" width="200"> <br/> '
        + '<a href="#">33345000 руб.</a><br/>'
        + '<b>Мини Дом чтоб жить в каиф, инфроструктур нет, зато есть пивнуха в нём.</b> <br/>',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Дом во Всеволожске',
  }, {
    // preset: 'islands#circleHomeIcon',
    preset: 'islands#redHomeIcon',
    // цвет иконки
    iconColor: '#8b00ff',
  });
  // Добавим метку на карту.
  myMap.geoObjects
    .add(elbrus)
    .add(room1)
    .add(room2)
    .add(room3)
    .add(room4);
  // Откроем балун на метке.
  // placemark.balloon.open();
  // ******** Крутая кнопка с боковым видом:********************************************************

  // ***********************************************************************************************
  // Варианты разные кнопок.
  // myMap.geoObjects
  //   .add(elbrus)
  //   .add(new ymaps.Placemark([59.94268494427673, 30.29800521072447], {
  //     hintContent: 'Собственный значок метки',
  //     balloonContent: 'цвет <strong>воды пляжа бонди</strong>',
  //   }, {
  //     preset: 'islands#redHomeIcon',
  //     iconColor: '#0095b6',
  //   }))
  //   .add(new ymaps.Placemark([59.95043526050804, 30.316201316681482], {
  //     balloonContent: '<strong>серобуромалиновый</strong> цвет',
  //   }, {
  //     preset: 'islands#dotIcon',
  //     iconColor: '#735184',
  //   }))
  // .add(new ymaps.Placemark([59.94372457178738, 30.360267873903155], {
  //   balloonContent: 'цвет <strong>влюбленной жабы</strong>',
  // }, {
  //   preset: 'islands#circleIcon',
  //   iconColor: '#3caa3c',
  // }))
  // .add(new ymaps.Placemark([59.954186740023054, 30.368643018316938], {
  //   balloonContent: 'цвет <strong>детской неожиданности</strong>',
  // }, {
  //   preset: 'islands#circleDotIcon',
  //   iconColor: 'yellow',
  // }))
  // .add(new ymaps.Placemark([59.967528730164204, 30.33207914502591], {
  //   balloonContent: 'цвет <strong>красный</strong>',
  // }, {
  //   preset: 'islands#redHomeIcon',
  // }));
  // .add(new ymaps.Placemark([59.92610817777931, 30.32123081190368], {
  //   balloonContent: 'цвет <strong>фэйсбука</strong>',
  // }, {
  //   preset: 'islands#governmentCircleIcon',
  //   iconColor: '#3b5998',
  // }))
  // .add(new ymaps.Placemark([59.92903775748172, 30.362429542372414], {
  //   balloonContent: 'цвет <strong>носика Гены</strong>',
  //   iconCaption: 'Очень длиннный, но невероятно интересный текст',
  // }, {
  //   preset: 'islands#greenDotIconWithCaption',
  // }))
  // .add(new ymaps.Placemark([59.928563872480794, 30.411438865492542], {
  //   balloonContent: 'цвет <strong>голубой</strong>',
  //   iconCaption: 'Очень длиннный, но невероятно интересный текст',
  // }, {
  //   preset: 'islands#blueCircleDotIconWithCaption',
  //   iconCaptionMaxWidth: '50',
  // }));
}
