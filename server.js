const express = require("express");
const { apiError } = require("./utils");
const cors = require("cors");
const path = require("path");
const connectDatabase = require("./configs/database");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});


const app = express();
app.use(express.json());
app.use(cors());

// routes import
const { userRouter, blogRouter } = require("./routes");
// -----------------------------------------------------------

// routes
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);
// -----------------------------------------------------------

app.get("/api/hello", (req, res) => {
  res.send("Hello! This message is from Server!");
});

app.use("*", (req, res) => {
  const error = apiError("NO_ROUTE");
  res.status(error.status).json(error);
});

app.use((err, req, res, next) => {
  const error = apiError(err.code, err.message);
  console.log(err);
  res.status(error.status).json(error);
});

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
