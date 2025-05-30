

const express = require('express');
const router = express.Router();
const controller = require('../controllers/salaryController');

// CRUD Routes
router.post('/', controller.addSalary);          // Create
router.get('/', controller.getSalaries);             // Read all
router.put('/:employeeId', controller.updateSalaryByEmployeeId);


module.exports = router;
