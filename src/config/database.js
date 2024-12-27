const { Sequelize } = require("sequelize");
const config = require(".");

const sequelize = new Sequelize({ dialect: "postgres", ...config.database });

sequelize
  .authenticate()
  .then(() => {
    console.log("Database is connected successfuly");
  })
  .catch((err) => {
    console.error("Database connection is failed", err);
  });

sequelize.sync({ alter: true });

module.exports = sequelize;
