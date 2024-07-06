const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { apiError, response } = require("../utils");
dotenv.config();

const authentication = (req, res, next) => {
  const { authorization } = req.headers;
  const JWT_SECRET = process.env.JWT_SECRET;

  try {
    if (!authorization) {
      return response(res, 401, "Unauthorized");
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return response(res, 401, "Invalid Token");
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return response(res, 401, "Unauthorized Token");
      }

      req.token = token;
      req.user = decoded;
      next();
    });
  } catch (err) {
    const error = apiError("NOT_FOUND", err.message);
    return res.status(error.status).json(error);
  }
};

module.exports = authentication;
