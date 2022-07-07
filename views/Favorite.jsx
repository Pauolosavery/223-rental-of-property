const React = require('react');
const FavorApart = require('./FavorApart');
const Layout = require('./Layout');

module.exports = function Favorite({ title, user, favorites }) {
  { console.log('🚀 ~ file: Admin.jsx ~ line 6 ~ Home ~ housings', favorites); }
  return (
    <Layout title={title} user={user}>
      <div className="homePage">
        <div className="titleHomeLayout">
          <h1>{title}</h1>
        </div>
        <div className="editCardDiv" />
        { favorites.map((apart) => <FavorApart key={apart.id} apart={apart} />)}
      </div>
    </Layout>
  );
};
