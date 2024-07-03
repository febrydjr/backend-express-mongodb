const { User } = require("../../models");

const createUser = async (name, email, password) => {
  try {
    const user = await User.create({ name, email, password });
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = createUser;
