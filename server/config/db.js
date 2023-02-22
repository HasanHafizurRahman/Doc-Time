const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(
      `Mongodb connected at ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (err) {
    console.log(`Mongodb server issue ${err.message}`.bgRed.white);
    // process.exit(1);
  }
};

module.exports = connectDB;
