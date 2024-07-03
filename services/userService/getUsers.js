const { User } = require("../../models");

const getUsers = async () => {
  return await User.find();
};

module.exports = getUsers;
