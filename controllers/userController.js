const { response, apiError } = require("../utils");
const userService = require("../services/userService");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    response(res, 200, users);
  } catch (err) {
    const error = apiError("NOT_FOUND", err.message);
    res.status(error.status).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.createUser(name, email, password);
    response(res, 200, user);
  } catch (err) {
    const error = apiError("INTERNAL_SERVER_ERROR", err.message);
    res.status(error.status).json(error);
  }
};

module.exports = { getUsers, createUser };
