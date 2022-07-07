const React = require('react');

module.exports = function Apart({ apart }) {
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
          <button className="btn btn-primary" href={`/housing/edit/${apart.id}`}>Редактировать</button> <a/>
          <button className="btn btn-primary" href={`/housing/del/${apart.id}`}>Удалить</button>
        </div>
      </div>
    </div>
  </div>

    // <div className="entryOnAllPage">
      // <a href={`/housing/${apart.id}`}>{apart.title}</a>
      // <p className="postTextClass" name="description">{apart.description}</p>
      // <p className="postTextClass" name="location">{apart.location}</p>
      // <img href={`${apart.image}`} alt="Photo"/>
      // <p className="postTextClass" name="type_id">{apart.type_id}</p>
      // <button href={`/housing/del/${apart.id}`}>Удалить</button>
      // <button href={`/housing/edit/${apart.id}`}>Редактировать</button>
    // </div>
  );
};
