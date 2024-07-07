const router = require("express").Router();
const { userController } = require("../controllers");
const { authentication, authorization, joi } = require("../middlewares");
const { authValidation } = require("../validations");

router.get(
  "/",
  authentication,
  authorization(1, 2, 3),
  userController.getUsers
);

router.post(
  "/",
  authentication,
  authorization(1, 2),
  joi(authValidation.createUserSchema),
  userController.createUser
);

module.exports = router;
