const { Router } = require("express");
const validationMiddleware = require("../middlewares/validation.middleware");
const authValidation = require("../validations/auth.validation");
const authController = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post(
  "/login",
  validationMiddleware(authValidation.signIn),
  authController.signIn
);

module.exports = authRouter;
