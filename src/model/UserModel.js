const { DataTypes } = require("sequelize");

const sequelize = require("../database/index");

const User = sequelize.define("eh_user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;
