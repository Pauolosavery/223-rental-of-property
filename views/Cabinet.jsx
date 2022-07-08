const React = require('react');
const Apart = require('./Apart');
const Layout = require('./Layout');

module.exports = function Cabinet({ title, user, housings }) {
  return (
    <Layout title={title} user={user}>
      <div className="titleHomeLayout">
        <h1>{title}</h1>
      </div>
      <div className="homePage">
        <div className="editCardDiv">
          {housings.map((apart) => {
            let admin;
            if (user.admin) {
              admin = true;
            } else {
              admin = false;
            }
            return (<Apart key={apart.id} apart={apart} admin={admin} />);
          })}
        </div>
        <script defer src="/js/client.js" />
      </div>
    </Layout>
  );
};
