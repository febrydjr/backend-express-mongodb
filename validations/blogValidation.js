const joi = require("joi");

const createBlogSchema = joi.object({
  title: joi.string().required(),
  body: joi.string().required(),
});

module.exports = {
  createBlogSchema,
};
