const joi = require("joi");

const createUserSchema = joi.object({
  name: joi.string().required().min(10),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = {
  createUserSchema,
};
