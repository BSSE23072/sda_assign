const express = require('express');          // Import Express framework
const path = require('path');                  // Import path module for handling file paths
const app = express();                         // Create an Express application instance
const employeeRoutes = require('./routes/employeeRoutes');
const signupRoutes = require('./routes/signupRoutes');
const salaryRoutes = require('./routes/salaryRoutes');
require('dotenv').config();                     // Load environment variables from .env file
const cors = require('cors');                   // Import CORS middleware to handle cross-origin requests

// Middleware setup
app.use(cors());                               // Enable CORS for all routes (allow cross-origin requests)
app.use(express.json());                       // Parse incoming JSON payloads

// Serve static files (CSS, JS, images) from 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Mount API routes - important: put these BEFORE the catch-all route!
app.use('/api/employees', employeeRoutes);
app.use('/api/signups', signupRoutes);
app.use('/api/salaries', salaryRoutes);

// Catch-all route to serve frontend for any unmatched route (place last)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;
