const React = require('react');
const NavMenu = require('./NavMenu');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="ru">
      <head>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script defer src="/js/client.js" />
        <script defer type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <script defer nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
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

      <NavMenu user={user} />

      <body>
        {children}
        {/* <div id="map" style={{ width: '100%', height: '400px' }} /> */}
      </body>
      <br />
      <footer className="card text-center">
        <div className="card-header">
          Наши контакты
        </div>
        <div className="card-body">
          <h5 className="card-text">Офис: Кирочная 19, г.Санкт-Петербург, офис 323</h5>
          <h5 className="card-text">Почта: admin@admin.com</h5>
        </div>
      </footer>
    </html>
  );
};
