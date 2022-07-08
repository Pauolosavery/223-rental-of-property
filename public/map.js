ymaps.ready(init);
async function init() {
  const response = await fetch('/bd', {
    method: 'GET',
  });
  const bd = await response.json();
  console.log(bd);
  // Создание карты.
  const myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.94367702670159, 30.360418754060603],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 12,
    controls: ['fullscreenControl'],
  });

  // Ищем координаты указанного адреса
  // Добавляем всю инфу в один массив
  // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode-docpage/
  const geocoder = [];
  let i = 0;
  bd.forEach((house) => {
    geocoder[i] = [];
    geocoder[i].push(ymaps.geocode(house.location));
    geocoder[i].push(house.title);
    geocoder[i].push(house.price);
    geocoder[i].push(house.description);
    geocoder[i].push(house.location);
    geocoder[i].push(house.image);
    geocoder[i].push(house.type_id);
    i++;
  });

  let count = 0;
  // После того, как поиск вернул результат, вызывается callback-функция
  geocoder.forEach((geo) => {
    geo[0].then(
      (res) => {
        // координаты объекта
        const coordinates = res.geoObjects.get(0).geometry.getCoordinates();

        // Добавление метки (Placemark) на карту
        const placemark = new ymaps.Placemark(coordinates, {
          hintContent: `${geo[1]}`,
          balloonContent: `${geo[4]}`// ${geo[2]}`,
        }, {
          preset: 'islands#redHomeIcon',
          iconColor: '#8b00ff',
        });
        count++;
        myMap.geoObjects.add(placemark);
      },
    );
  });
}
