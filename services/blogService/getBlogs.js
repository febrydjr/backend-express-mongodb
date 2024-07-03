const { Blog } = require("../../models");

const getBlogs = async () => {
  return await Blog.find();
};

module.exports = getBlogs;
