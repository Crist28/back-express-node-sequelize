const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Post extends Model {}
Post.init(
  {
    nombre: DataTypes.STRING,
    apellido: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "post",
  }
);

module.exports = Post;
