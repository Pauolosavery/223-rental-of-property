const React = require('react');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <script defer src="/js/client.js" />
        {/* <!-- Bootstrap CSS --> */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        {/* <!-- Bootstrap Scripts --> */}
        <title>{title}</title>
        <script
          defer
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"
        />
        {/* <!-- User Scripts --> */}

        <title>{title}</title>
      </head>
      <header>
        <div className="navBar">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="/">П.И.К. недвижимость</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {(function navbar() {
              if (user && user.admin) {
                return (
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/user/:id">{`Привет, ${user.fullname}! (продавец)`}</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/user/:id/goods">Личный кабинет</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href={`/user/${user.id}/goods/edit`}>Добавить товар</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/auth/logout">Выйти</a>
                      </li>
                    </ul>
                  </div>
                );
              } if (user) {
                return (
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/user/:id">{`Привет, ${user.fullname}! (арендатор)`}</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/user/:id/goods">Избранное</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/auth/logout">Выйти</a>
                      </li>
                    </ul>
                  </div>
                );
              }
              return (
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                      <a className="nav-link mr-4" href="/auth/login">Войти</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mr-4" href="/auth/registr">Зарегистрироваться</a>
                    </li>

                  </ul>
                </div>
              );
            }())}
          </nav>
        </div>
      </header>
      <body>
        {children}
      </body>
    </html>
  );
};
