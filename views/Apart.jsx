const React = require('react');

module.exports = function Apart({ apart, admin }) {
  return (

    <div className="divFrameCard">
      <div className="divFrameCardBG">
        <div className="divFrameCardIMG" style={{background: `url(${apart.image})`}}/>
        <h4 className="divFrameCardTitle">Title</h4>
        <text className="cardDiscriptionDiv">DISCRIPTION</text>
        <text className="cardFramePrice">10 000 р/мес</text>
        {/* <div className='cardDivCloseIcon'> */}
        {/* <div className='cardDivCloseIconX'></div> */}
        <div className="deleteIconApart">
          <ion-icon
            style={{
              left: '456px',
              top: '3px',
              position: 'absolute',
              color: '#cd2f2f',
              height: '61px',
              width: '43px',
              filter: 'drop-shadow(1px 1px 2px #895559)',
            }}
            name="backspace"
          />
        </div>
        {/* </div> */}
        <div className="cardDivEdit">
          ИЗМЕНИТЬ
        </div>
      </div>
    </div>

  // <div
  //   className="card mb-3"
  //   style={{
  //     width: '100%', height: '222px', marginLeft: '10%', marginRight: '10%',
  //   }}
  //   data-id={`${apart.id}`}
  // >
  //   <div className="g-0">

  //     <div className="jumbotron" style={{ backgroundImage: `url(${apart.image});` }} />

  //     <div className="col-md-8">
  //       <div className="card-body">
  //         <h5 className="card-title" href={`/housing/${apart.id}`}>{apart.title}</h5>
  //         <p className="card-text">{apart.description}</p>

  //         <p className="card-text">
  //           Тип жилья:
  //           {' '}
  //           {apart['Type.typeName']}
  //         </p>

  //         <p className="card-text"><small className="text-muted">{apart.location}</small></p>
  //         { (function () {
  //           if (admin) {
  //             return (
  //               <div className="d-flex justify-content-around">
  //                 <button className="editButton btn btn-warning" href={`/housing/edit/${apart.id}`}>Редактировать</button>
  //                 <a />
  //                 <button className="delButton btn btn-danger" href={`/housing/del/${apart.id}`}>Удалить</button>
  //               </div>
  //             );
  //           }
  //           return (
  //             <button href={`/housing/userk/${apart.id}`}>
  //               <ion-icon style={{ width: '30px', height: '30px' }} name="heart-outline" />
  //             </button>
  //           );
  //         }())}

  //       </div>
  //     </div>
  //   </div>
  // </div>
  );
};
