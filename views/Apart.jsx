const React = require('react');

module.exports = function Apart({ apart, admin }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className='imageDivContainer'>
      <img src={`${apart.image}`} alt="Photo" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{apart.title}</h5>
        <p className="card-text">{apart.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{apart.location}</li>
        <li className="list-group-item">{apart.price} р/мес</li>
        <li className="list-group-item">Принять на вход объект с полем 'Types.typesName' </li>
        {/* <li className="list-group-item">{apart['Types.typesName']}</li> */}
      </ul>
      {/* <div className="card-body">
        <a href="/user/favorite" className="card-link">Card link</a>
        <a href="/user/favorite" className="card-link">Another link</a>
      </div> */}
      { (function () {
        if (admin) {
          return (
            <>
              <button href={`/housing/edit/${apart.id}`}>Редактировать</button>
              <button href={`/housing/del/${apart.id}`}>Удалить</button>
            </>
          );
        }
        return (
          <button href={`/housing/userk/${apart.id}`}>
            <ion-icon style={{ width: "30px", height: "30px" }} name="heart-outline" />
          </button>
        );
      }())}
    </div>
  );
};
// <div className="entryOnAllPage">
//   <a href={`/housing/${apart.id}`}>{apart.title}</a>
//   <p className="postTextClass" name="description">{apart.description}</p>
//   <p className="postTextClass" name="location">{apart.location}</p>
//   <img src={`${apart.image}`} alt="Photo" />
//   <p className="postTextClass" name="type_id">{apart.type_id}</p>
//   { (function () {
//     if (admin) {
//       return (
//         <>
//           <button href={`/housing/edit/${apart.id}`}>Редактировать</button>
//           <button href={`/housing/del/${apart.id}`}>Удалить</button>
//         </>
//       );
//     }
//     return (
//       <ion-icon name="heart-outline" />
//     );
//   }())}
// </div>
