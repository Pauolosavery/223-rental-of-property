const React = require('react');
const Layout = require('./Layout')

module.exports = function NavMenu({ user }) {
  return (
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
                        <a className="nav-link mr-4">{`Привет, ${user.login}! (администратор)`}</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/user/admin">Личный кабинет</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/housing">Добавить жилье</a>
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
                        <a className="nav-link mr-4">{`Привет, ${user.login}!`}</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/rooms">Комнаты</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/flats">Квартиры</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/houses">Дома</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/user/favorite">Избранное</a>
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
                      <a className="nav-link mr-4" href="/auth/reg">Зарегистрироваться</a>
                    </li>
                  </ul>
                </div>
              );
            }())}
          </nav>
        </div>
      </header>
  )};