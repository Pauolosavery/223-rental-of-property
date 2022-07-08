'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    login: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 5,
      },
    },
    admin: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};