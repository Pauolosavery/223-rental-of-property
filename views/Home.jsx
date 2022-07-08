const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ title, user, housings}) {
  return (
    <Layout title={title} user={user}>
      <script
        defer
        src="https://api-maps.yandex.ru/2.1/?apikey=33da25b1-2302-4a3b-a310-16a6ea651c14&lang=ru_RU"
        type="text/javascript"
      />
      <script defer src="/map.js" type="text/javascript" />
      <div style={{ textAlign: 'center' }} className="homePage">
        <h1>{title}</h1>
        {/* <div className="divHomeImg"> */}
        {/* </div> */}
      </div>

   //   <div id="map" style={{ width: '100%', height: '620px' }} />
 //     {/* <script defer src="https://api-maps.yandex.ru/2.1/?apikey=69e10893-2c84-42aa-89b4-4b684b720fad&lang=ru_RU" type="text/javascript" />
   //   <script defer src="/maps.js" type="text/javascript" /> */}
 //     {/* <script defer src="https://api-maps.yandex.ru/2.1/?apikey=33da25b1-2302-4a3b-a310-16a6ea651c14&lang=ru_RU" type="text/javascript" />
 //     <script defer src="/js/map.js" type="text/javascript" /> */}

      {(function () {
        if (user) {
          return (<div id="map" style={{ width: '100%', height: '620px' }} />);
        }
        return (<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acabc5f2f39c3cb2a515d5b03f7436918af66ff073e16f4788011b30149fec17a&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=true"></script>);
      }())}


    </Layout>
  );
};
