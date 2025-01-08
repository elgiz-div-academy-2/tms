const { UnauthorizedError } = require("../utils/error.utils");
const { encodePayload } = require("../utils/jwt.utils");
const userService = require("./user.service");
const bcrypt = require("bcrypt");

const signIn = async (params) => {
  const { username, password } = params;

  const user = await userService.findOne({ username });
  if (!user) throw new UnauthorizedError("User or password is wrong");

  let checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) throw new UnauthorizedError("User or password is wrong");

  const token = encodePayload({ userId: user.id });

  return {
    token,
    user: { ...user.toJSON(), password: undefined },
  };
};

const authService = {
  signIn,
};

module.exports = authService;
