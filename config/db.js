// Here is the logic for connecting the database to the view by using this express.js code
const mongoose = require('mongoose');
//This line imports the Mongoose library.

//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.

// It helps you define schemas and interact with MongoDB in a more structured way.



const connectDB = async () => {
  try {
 await mongoose.connect(process.env.DB_URI);
    console.log(' MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
