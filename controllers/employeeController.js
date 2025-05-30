const Appointment = require('../models/Employee');// first of All we have to import the schema of the Employee model



const Employee = require('../models/Employee'); // Make sure path is correct

exports.addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    // Fix: use 'err', not 'error' here
    console.error('Error adding employee:', err);
    res.status(400).json({ error: err.message });
  }
};




// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    // Use Mongoose's find() method to get all documents from the 'employees' collection
    const employees = await Employee.find();

    // Send the retrieved employees as a JSON response to the client
    res.json(employees);
  } catch (err) {
    // If an error occurs, send a 500 Internal Server Error status and the error message as JSON
    res.status(500).json({ error: err.message });
  }
};


// Search for one employee by their MongoDB document ID
exports.searchEmployeeById = async (req, res) => {
  try {
    // Find the employee document by its _id field using the ID provided in the URL params
    const employee = await Employee.findById(req.params.id);

    // If no employee is found, respond with 404 Not Found and an error message
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    // If employee is found, send the employee data back as JSON
    res.json(employee);
  } catch (err) {
    // If an error occurs (e.g., invalid ID format), send a 500 Internal Server Error response with the error message
    res.status(500).json({ error: err.message });
  }
};


// // Delete an employee by ID
// exports.deleteEmployeeById = async (req, res) => {
//   try {
//     // Find the employee by ID and delete the document from the database
//     const employee = await Employee.findByIdAndDelete(req.params.id);

//     // If no employee found with the given ID, send a 404 Not Found response
//     if (!employee) return res.status(404).json({ error: 'Employee not found' });

//     // If deletion is successful, send a success message as JSON
//     res.json({ message: 'Deleted successfully' });
//   } catch (err) {
//     // If any error occurs (e.g., invalid ID format), send a 500 Internal Server Error with the error message
//     res.status(500).json({ error: err.message });
//   }
// };



// // In controllers/employeeController.js


// exports.deleteEmployeeById = async (req, res) => {
//   const employeeId = req.params.id; // custom employeeId string

//   try {
//     // Find employee by custom field employeeId (not MongoDB _id)
//     const deleted = await Employee.findOneAndDelete({ employeeId: employeeId });

//     if (!deleted) {
//       return res.status(404).json({ message: 'Employee not found' });
//     }

//     res.json({ message: 'Employee deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting employee:', error);
//     res.status(500).json({ error: error.message });
//   }
// };


exports.deleteEmployeeById = async (req, res) => {
  const id = req.params.id;

  try {
    // const deleted = await Employee.findByIdAndDelete(id);
        const deleted = await Employee.findOneAndDelete({ employeeId: 'YJ9BJQG2' }); // Hardcoded test


    if (!deleted) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: error.message });
  }
};
