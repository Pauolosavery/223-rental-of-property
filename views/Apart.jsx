const React = require('react');

module.exports = function Apart({ apart, admin }) {
  { console.log('🚀 ~ file: Apart.jsx ~ line 4 ~ Apart ~ admin', admin); }
  return (

    <div className="card mb-3" style={{maxWidth: '100%'}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={`${apart.image}`} className="img-fluid rounded-start"></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title" href={`/housing/${apart.id}`}>{apart.title}</h5>
          <p className="card-text">{apart.description}</p>

          <p className="card-text">Тип жилья: {apart['Type.typeName']}</p>

          <p className="card-text"><small className="text-muted">{apart.location}</small></p>
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
          <ion-icon name="heart-outline" />
        );
      }())}
        </div>
      </div>
    </div>
  </div>

  );
};
