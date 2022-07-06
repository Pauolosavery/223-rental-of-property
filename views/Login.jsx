const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout title="Login">
      <div className="container">
        <h1>
          Авторизация
        </h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Постараемся слить ваши данные подороже</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Введите пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Проверка на дурака</label>
          </div>
          <button type="submit" className="btn btn-primary">Войти</button>
        </form>
      </div>
      <div className="errorMessage" />
    </Layout>
  );
};
