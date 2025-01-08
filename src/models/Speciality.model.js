const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Speciality = sequelize.define("Speciality", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Speciality;
