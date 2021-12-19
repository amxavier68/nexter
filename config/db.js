const mongoose = require('mongoose');

const connectDB = async () => {
  const dsn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  });
  console.log(`MongoDB Connected <host>: ${dsn.connection.host}`)
}

module.exports = connectDB;