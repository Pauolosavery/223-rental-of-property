const React = require('react');
const HouseApart = require('./FlatApart');
const Layout = require('../Layout');

module.exports = function Favorite({ title, user, housings }) {
  { console.log('🚀 ~ file: Admin.jsx ~ line 6 ~ Home ~ housings', housings); }
  return (
    <Layout title={title} user={user}>
      <div className="homePage">
        <div className="titleHomeLayout">
          <h1>{title}</h1>
        </div>
        <div className="editCardDiv" />
        { housings.map((apart) => <HouseApart apart={apart} />)}
      </div>
    </Layout>
  );
};
