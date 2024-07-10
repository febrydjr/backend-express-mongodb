const mongoose = require("mongoose");

const dbTransaction = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  req.session = session;

  res.on("finish", async () => {
    if (res.statusCode >= 400) {
      await session.abortTransaction();
      console.log("Transaction aborted");
    } else {
      await session.commitTransaction();
      console.log("Transaction committed");
    }
    session.endSession();
  });

  next();
};

module.exports = dbTransaction;
