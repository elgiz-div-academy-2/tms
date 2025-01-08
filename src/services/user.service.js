const { User } = require("../models");

const findOne = (where) => User.findOne({ where });

const userService = {
  findOne,
};

module.exports = userService;
