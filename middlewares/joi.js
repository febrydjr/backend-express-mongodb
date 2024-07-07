const { response } = require("../utils");

const joiMiddleware = (schema) => {
  return (req, res, next) => {
    const data = {
      ...req.body,
      ...req.params,
      ...req.query,
    };

    const { error } = schema.validate(data);

    if (error) {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      return response(res, 400, message);
    }
    next();
  };
};

module.exports = joiMiddleware;
