const { response, apiError } = require("../utils");
const blogService = require("../services/blogService");

const getBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getBlogs();
    response(res, 200, blogs);
  } catch (err) {
    const error = apiError("NOT_FOUND", err.message);
    res.status(error.status).json(error);
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, body, image } = req.body;
    const blog = await blogService.createBlog(title, body, image);
    response(res, 200, blog);
  } catch (err) {
    const error = apiError("INTERNAL_SERVER_ERROR", err.message);
    res.status(error.status).json(error);
  }
};

module.exports = { getBlogs, createBlog };
