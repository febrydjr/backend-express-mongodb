const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = async () => {
  try {
    // await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDB Connection Successfully");
  } catch (error) {
    throw error;
  }
};

module.exports = connectDatabase;
