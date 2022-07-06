const React = require('react');
const Layout = require('./Layout');
// const EntryHome = require('./Entry-home');

module.exports = function Home({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="homePage">
        <div className="titleHomeLayout">
          <h1>{title}</h1>
        </div>
        <div className="divHomeImg">
          YANDEX MAPS
        </div>
        {/* <div className="editCardDiv" /> */}
        {/* {posts.map((obj) => <EntryHome key={obj.id} obj={obj} />)} */}
      </div>
    </Layout>
  );
};
