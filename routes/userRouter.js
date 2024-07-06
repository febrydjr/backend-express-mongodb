const router = require("express").Router();
const { userController } = require("../controllers");
const { authentication, authorization } = require("../middlewares");

router.get(
  "/",
  authentication,
  authorization(1, 2, 3),
  userController.getUsers
);
router.post("/", authentication, authorization(1), userController.createUser);

module.exports = router;
