'use strict';
const { 
  Sequelize,
  Model
} = require('sequelize');

const sequelize = new Sequelize("capstone", "breadjg", null, {
  host: "127.0.0.1",
  port: 5432,
  dialect: 'postgres',
  logging: false
})
module.exports = (sequelize, DataTypes) => {
  class USER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  USER.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    events: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'USER',
  });
  return USER;
};