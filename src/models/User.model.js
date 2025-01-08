const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      allowNull: false,
      defaultValue: "student",
      values: ["teacher", "student", "admin"],
    },
    graduateStatus: {
      type: DataTypes.ENUM,
      values: ["inProgress", "graduated", "suspended"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
