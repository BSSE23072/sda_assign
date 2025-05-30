const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,         // Make sure employeeId is unique in the collection
    trim: true,
    match: /^[a-zA-Z0-9]+$/  // Regex to allow only alphanumeric characters
  },
  firstName: { type: String, required: true, trim: true },
  gender: {
    type: String,
    enum: ['male', 'female', 'non-binary'],
    required: true,
  },
  dob: { type: Date, required: true },
  contact1: { type: Number, required: true, trim: true },
  contact2: { type: Number, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  address: { type: String, required: true, trim: true },
  jobTitle: { type: String, required: true, trim: true },
  department: { type: String, required: true, trim: true },
  manager: { type: String, required: true, trim: true },
  employeeType: { type: String, required: true, trim: true },
  hiringDate: { type: Date, required: true },
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps automatically
});

module.exports = mongoose.model('Employee', employeeSchema);
