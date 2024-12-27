const jwt = require("jsonwebtoken");
const config = require("../config");

const decodeToken = (token) => {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch (err) {
    return false;
  }
};

const encodePayload = (payload) => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: "1d" });
};

module.exports = {
  decodeToken,
  encodePayload,
};
