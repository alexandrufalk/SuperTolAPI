const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });

    console.log("MogoDB is connected");
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
