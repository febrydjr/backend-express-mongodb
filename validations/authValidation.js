const joi = require("joi");

const createUserSchema = joi.object({
  name: joi.string().required().min(10),
  email: joi.string().email().required(),
  password: joi
    .string()
    .required()
    .min(6)
    .max(20)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]"
      )
    )
    .message(
      "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character, and be between 6 and 20 characters long"
    ),
});

module.exports = {
  createUserSchema,
};
