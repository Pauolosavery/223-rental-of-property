const housingRouter = require('express').Router();
const AddApart = require('../views/AddApart');

const { Housing } = require('../db/models');

module.exports = housingRouter
  .get('/', (req, res) => {
    const { user } = req.session;
    const title = 'Добавление ренты';
    res.renderComponent(AddApart, { title, user });
})
  .get('/edit/:idApart', async (req, res) => {
    const { user } = req.session;
    const { idApart } = req.params;
    const editApart = await Housing.findByPk(req.params.idApart);
    res.renderComponent(AddApart, { user, editApart });
    // res.json(user);
  })
  .get('/del/:id', async (req, res) => {
    // const { user } = req.session;
    const { id } = req.params;
    await Housing.destroy({
      where: {
        id,
      },
    });
    // res.renderComponent(AddApart, { user, editApart });
    res.json({status: 'ok'});
  });
