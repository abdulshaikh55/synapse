const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
      .then((data) => {
        console.log(`database connected with ${data.connection.host}`);
      })
  } catch (error) {
    console.error('Database connection failed:', error);
    setTimeout(this.connectDB, 5000)
  }
};

module.exports = connectDB;