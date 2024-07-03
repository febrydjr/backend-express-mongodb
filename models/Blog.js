const mongoose = require("mongoose");

const Blog = mongoose.model("Blog", {
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Blog;
