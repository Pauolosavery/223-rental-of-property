const React = require('react');
const FavorApart = require('./FavorApart');
const Layout = require('./Layout');

module.exports = function Fav({ title, user, favorites }) {
  return (
    <Layout title={title} user={user}>
      <div className="homePage">
        <div className="titleHomeLayout">
          <h1>{title}</h1>
        </div>
        <div className="editCardDiv">
          {favorites.map((apart) => {
            let admin;
            if (user.admin) {
              admin = true;
            } else {
              admin = false;
            }
            return (<FavorApart key={apart.id} apart={apart} admin={admin} />);
          })}
        </div>
      </div>
    </Layout>
  );
};
