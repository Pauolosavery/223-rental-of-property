ymaps.ready(init);
function init() {
  // Создание карты.
  const myMap = new ymaps.Map('map', {
    center: [59.94367702670159, 30.360418754060603],
    zoom: 12,
  });

  // Строка с адресом, который необходимо геокодировать
  const address = 'Санкт-Петербург, ул. Кирочная 19';

  // Ищем координаты указанного адреса
  // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode-docpage/
  const geocoder = ymaps.geocode(address);

  // После того, как поиск вернул результат, вызывается callback-функция
  geocoder.then(
    (res) => {
      // координаты объекта
      const coordinates = res.geoObjects.get(0).geometry.getCoordinates();

      // Добавление метки (Placemark) на карту
      const placemark = new ymaps.Placemark(coordinates, {
        hintContent: address,
        balloonContent: 'Время работы: Пн-Пт, с 9 до 20',
      }, {
        preset: 'islands#redDotIcon',
      });

      myMap.geoObjects.add(placemark);
    },
  );
}
