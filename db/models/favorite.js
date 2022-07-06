'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Housing }) {
      Favorite.belongsTo(User, { foreignKey: '{ user_id }' });
      Favorite.belongsTo(Housing, { foreignKey: '{ housing_id }' });
      // define association here
    }
  }
  Favorite.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    housing_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Housings',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};