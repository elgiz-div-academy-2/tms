const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SemesterModel = sequelize.define("SemesterModel", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  term: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },

  dateFrom: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  dateTo: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

module.exports = SemesterModel;
