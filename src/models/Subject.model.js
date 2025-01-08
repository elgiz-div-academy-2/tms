const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SubjectModel = sequelize.define("SubjectModel", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = SubjectModel;
