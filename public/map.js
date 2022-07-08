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
    geocoder[i].push(house.title);// 1
    geocoder[i].push(house.price);// 2
    geocoder[i].push(house.description);// 3
    geocoder[i].push(house.location);// 4
    geocoder[i].push(house.image);// 5
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
          balloonContentHeader: `<a href = "#">${geo[1]} </a><br>`
          + `<span >${geo[4]}</span><br>`
          + `<img src="${geo[5]}" style="width:200px; height:200px "> <br/>`,
          balloonContentBody: `<a href="#">${geo[2]} руб.</a> <br/>` + `<b>${geo[3]}</b> <br/>`,
          balloonContentFooter: 'Информация предоставлена:<br/>OOO "П.И.К."',
          hintContent: `${geo[1]}<br/> ${geo[2]} рубляу`,
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
