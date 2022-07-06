const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>
          {title}
        </h1>
        <form action="/auth/login" method="post">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Постараемся слить ваши данные подороже</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Введите пароль</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
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
