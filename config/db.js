const mongoose = require('mongoose');

const connectDB = async () => {
  const url=process.env.MONGODB_URI || "mongodb://localhost:27017/mern_dash?authSource=admin"
  try {
    const db = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('Connection success')
  } catch (error) {
    throw Error(error);
    // process.exit(1);
  }
};

module.exports = connectDB;
