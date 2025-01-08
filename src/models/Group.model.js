const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const GroupModel = sequelize.define("GroupModel", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = GroupModel;
