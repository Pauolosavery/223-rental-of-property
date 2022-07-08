const React = require('react');

module.exports = function Apart({ apart, admin }) {
  return (

    <div className="card mb-3" style={{maxWidth: '100%'}} data-id={`${apart.id}`}>
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
              <button className="editButton" href={`/housing/edit/${apart.id}`}>Редактировать</button>
               <a />
              <button className="delButton" href={`/housing/del/${apart.id}`}>Удалить</button>
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
      </div>
    </div>

  );
};
