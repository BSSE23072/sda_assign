// insertEmployee.js
require('dotenv').config();
const mongoose = require('mongoose');
const Employee = require('./models/Employee');  // adjust path as needed
const connectDB = require('./config/db');       // your db connection function

async function createEmployee() {
  await connectDB();  // Connect to DB first

  try {
    const newEmployee = new Employee({
      employeeId: 'E001',
      firstName: 'John',
      gender: 'male',
      dob: new Date('1990-01-01'),
      contact1: '1234567890',
      contact2: '123',
      email: 'john.doe@example.com',
      address: '123 Main St',
      jobTitle: 'Developer',
      department: 'IT',
      manager: 'Jane Smith',
      employeeType: 'Full-time',
      hiringDate: new Date(),
    });
    await newEmployee.save();
    console.log('Employee saved:', newEmployee);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();  // Close DB connection when done
  }
}

createEmployee();
