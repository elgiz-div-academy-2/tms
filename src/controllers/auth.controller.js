const authService = require("../services/auth.service");

const signIn = async (req, res, next) => {
  try {
    let result = await authService.signIn(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const authController = {
  signIn,
};

module.exports = authController;
