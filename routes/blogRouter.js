const router = require("express").Router();
const { blogController } = require("../controllers");

router.get("/", blogController.getBlogs);
router.post("/", blogController.createBlog);

module.exports = router;
