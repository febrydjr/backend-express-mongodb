const router = require("express").Router();
const { blogController } = require("../controllers");
const { authentication, authorization, joi } = require("../middlewares");
const { blogValidation } = require("../validations");

router.get("/", blogController.getBlogs);
router.post(
  "/",
  authentication,
  authorization(1, 2),
  joi(blogValidation.createBlogSchema),
  blogController.createBlog
);

module.exports = router;
