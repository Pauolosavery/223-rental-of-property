const React = require('react');

module.exports = function Apart({ apart }) {
  return (
    <div className="entryOnAllPage">
      <a href={`/housing/${apart.id}`}>{apart.title}</a>
      <p className="postTextClass" name="description">{apart.description}</p>
      <p className="postTextClass" name="location">{apart.location}</p>
      <img href={`${apart.image}`} alt="Photo"/>
      <p className="postTextClass" name="type_id">{apart.type_id}</p>
      <button href={`/housing/del/${apart.id}`}>Удалить</button>
    </div>
  );
};
