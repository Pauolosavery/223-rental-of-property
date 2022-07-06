const React = require('react');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="/css/application.css" />
        <script defer src="/js/application.js" />
        <title>{title}</title>
      </head>
      <header>
        <div className="navBar">
          <a href="/">Домашняя</a>
          {user ? <a href="/user">Личный кабинет</a> : 
          <><a href="/auth/login">Войти</a><a href="/auth/reg">Регистрация</a></>}
          <a href="/tags">Список всех тем</a>
          <a href="/entries/add">Добавить пост</a>
        </div>
      </header>
      <body>
        {children}
      </body>
    </html>
  );
};
