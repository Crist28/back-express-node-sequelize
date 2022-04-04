const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}
User.init(
  {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    age: 
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;
