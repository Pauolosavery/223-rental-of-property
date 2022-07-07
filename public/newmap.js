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
  const placemark = new ymaps.Placemark(myMap.getCenter(), {
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "#">Рога и копыта</a><br>'
        + '<span class="description">Сеть кинотеатров</span>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="https://sandbox.api.maps.yandex.net/examples/ru/2.1/balloon_html/img/cinema.jpg" height="150" width="200"> <br/> '
        + '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>'
        + '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Рога и копыта',
  });
  // Добавим метку на карту.
  myMap.geoObjects.add(placemark);
  // Откроем балун на метке.
  placemark.balloon.open();
  // ******** Крутая кнопка с боковым видом:********************************************************

  // ***********************************************************************************************
  // Варианты разные кнопок.
  myMap.geoObjects
    .add(new ymaps.Placemark([59.94268494427673, 30.29800521072447], {
      hintContent: 'Собственный значок метки',
      balloonContent: 'цвет <strong>воды пляжа бонди</strong>',
    }, {
      preset: 'islands#icon',
      iconColor: '#0095b6',
    }))
    .add(new ymaps.Placemark([59.95043526050804, 30.316201316681482], {
      balloonContent: '<strong>серобуромалиновый</strong> цвет',
    }, {
      preset: 'islands#dotIcon',
      iconColor: '#735184',
    }))
    .add(new ymaps.Placemark([59.94372457178738, 30.360267873903155], {
      balloonContent: 'цвет <strong>влюбленной жабы</strong>',
    }, {
      preset: 'islands#circleIcon',
      iconColor: '#3caa3c',
    }))
    .add(new ymaps.Placemark([59.954186740023054, 30.368643018316938], {
      balloonContent: 'цвет <strong>детской неожиданности</strong>',
    }, {
      preset: 'islands#circleDotIcon',
      iconColor: 'yellow',
    }))
    .add(new ymaps.Placemark([59.967528730164204, 30.33207914502591], {
      balloonContent: 'цвет <strong>красный</strong>',
    }, {
      preset: 'islands#redSportIcon',
    }))
    .add(new ymaps.Placemark([59.92610817777931, 30.32123081190368], {
      balloonContent: 'цвет <strong>фэйсбука</strong>',
    }, {
      preset: 'islands#governmentCircleIcon',
      iconColor: '#3b5998',
    }))
    .add(new ymaps.Placemark([59.92903775748172, 30.362429542372414], {
      balloonContent: 'цвет <strong>носика Гены</strong>',
      iconCaption: 'Очень длиннный, но невероятно интересный текст',
    }, {
      preset: 'islands#greenDotIconWithCaption',
    }))
    .add(new ymaps.Placemark([59.928563872480794, 30.411438865492542], {
      balloonContent: 'цвет <strong>голубой</strong>',
      iconCaption: 'Очень длиннный, но невероятно интересный текст',
    }, {
      preset: 'islands#blueCircleDotIconWithCaption',
      iconCaptionMaxWidth: '50',
    }));
}
