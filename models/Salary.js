const mongoose = require('mongoose');

const SalarySchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,       // Make sure employeeId is unique in the collection
    trim: true,
  },
  salary: { type: Number, required: true, trim: true },
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps automatically
});

module.exports = mongoose.model('Salary', SalarySchema);
