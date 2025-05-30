const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({

  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  username:{ type: String, required: true, trim: true, lowercase: true},
password:{type: String, required: true, trim: true, lowercase: true},
confirmPassword:{type: String, required: true, trim: true, lowercase: true}


}, {
  timestamps: true // Adds createdAt and updatedAt timestamps automatically
});
module.exports = mongoose.model('Signup', signupSchema);