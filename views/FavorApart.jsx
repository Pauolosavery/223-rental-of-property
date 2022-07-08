const React = require('react');

module.exports = function FavorApart({ apart }) {
  return (
    <div className="card mb-3" style={{maxWidth: '100%'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`${apart['Housing.image']}`} className="img-fluid rounded-start"></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" href={`/housing/${apart['Housing.id']}`}>{apart['Housing.title']}</h5>
            <p className="card-text">{apart['Housing.description']}</p>

            {/* <p className="card-text">Тип жилья: {apart['Type.typeName']}</p> */}

            <p className="card-text"><small className="text-muted">{apart['Housing.location']}</small></p>
            <button className="btn btn-primary" href={`/housing/fav/${apart['Housing.id']}`}>Убрать из избранного</button> <a/>
          </div>
        </div>
      </div>
    </div>

  
  );
};
