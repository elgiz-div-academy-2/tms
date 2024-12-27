const { Router } = require("express");
const validationMiddleware = require("../middlewares/validation.middleware");
const authValidation = require("../validations/auth.validation");

const authRouter = Router();

authRouter.post("/login", validationMiddleware(authValidation.signIn));

module.exports = authRouter;
