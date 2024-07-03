const { Blog } = require("../../models");

const createBlog = async (title, body, image) => {
  try {
    const blog = await Blog.create({ title, body, image });
    return blog;
  } catch (err) {
    throw err;
  }
};

module.exports = createBlog;
