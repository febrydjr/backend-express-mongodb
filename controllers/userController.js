const { response, apiError } = require("../utils");
const userService = require("../services/userService");

const getUsers = async (req, res) => {
  try {
    // const { id } = req.user;
    // const token = req.token;
    const users = await userService.getUsers();
    return response(res, 200, users);
  } catch (err) {
    const error = apiError("NOT_FOUND", err.message);
    return response(res, error.status, error);
  }
};

const createUser = async (req, res) => {
  try {
    // const { id } = req.user;
    const { name, email, password } = req.body;
    const user = await userService.createUser(name, email, password);
    return response(res, 200, user);
  } catch (err) {
    const error = apiError("INTERNAL_SERVER_ERROR", err.message);
    return response(res, error.status, error);
  }
};

module.exports = { getUsers, createUser };
