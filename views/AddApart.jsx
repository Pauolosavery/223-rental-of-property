const React = require('react');
const Layout = require('./Layout');

module.exports = function AddApart({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <h1>
          {title}
        </h1>
        <form action="/auth/login" method="post">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Заголовок</label>
            <input name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Стоимость аренды (р/мес)</label>
            <input name="price" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Подробное описание</label>
            <textarea name="description" type="text" className="form-control" style={{height: "222px"}}id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Расположение</label>
            <input name="location" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Фотография</label>
            <input name="location" type="text" className="form-control" id="exampleInputPassword1" value={"https://picsum.photos/200/300"}/>
          </div>
          <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Выберите тип недвижимости</label>
            <select name="type_id" className="custom-select" required>
              <option selected value="">Тип недвижимости</option>
              <option value="1">Комната</option>
              <option value="2">Квартира</option>
              <option value="3">Дом</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Добавить объект на карту</button>
        </form>
      </div>
      <div className="errorMessage" />
    </Layout>
  );
};
