const { BadRequestError } = require("../utils/error.utils");

const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    if (error) return next(new BadRequestError(error));

    req.body = value;
    next();
  };
};

module.exports = validationMiddleware;
