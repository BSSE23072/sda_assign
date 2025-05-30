

const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeeController');

// CRUD Routes
router.post('/', controller.addEmployee);          // Create
router.get('/', controller.getEmployees);             // Read all
router.get('/:id', controller.searchEmployeeById);       // Read one
router.delete('/:id', controller.deleteEmployeeById);     // Delete


module.exports = router;
