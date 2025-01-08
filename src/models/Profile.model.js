const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Profile = sequelize.define("Profile", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fatherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  entryScore: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  educationStatus: {
    type: DataTypes.ENUM,
    defaultValue: "selfFunded",
    values: ["stateFunded", "selfFunded"],
  },
  lastEntryIp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastEntryDate: {
    type: DataTypes.TIME,
    allowNull: true,
  },
});

module.exports = Profile;
