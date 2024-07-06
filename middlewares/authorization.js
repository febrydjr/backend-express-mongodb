const { response } = require("../utils");

const authorization = (...roles) => {
  return (req, res, next) => {
    const role = parseInt(req.user?.role, 10);

    if (!roles.includes(role)) {
      return response(res, 403, "Forbidden: You don't have permission");
    }

    next();
  };
};

module.exports = authorization;
