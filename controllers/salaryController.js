const Salary = require('../models/Salary'); // Make sure path is correct
exports.addSalary = async (req, res) => {
  try {
    const salary = new Salary(req.body);
    await salary.save();
    res.status(201).json(salary);
  } catch (err) {
    // Fix: use 'err', not 'error' here
    console.error('Error adding salary:', err);
    res.status(400).json({ error: err.message });
  }
};

exports.getSalaries = async (req, res) => {
  try {
    // Use Mongoose's find() method to get all documents from the 'employees' collection
    const salaries = await Salary.find();

    // Send the retrieved employees as a JSON response to the client
    res.json(salaries);
  } catch (err) {
    // If an error occurs, send a 500 Internal Server Error status and the error message as JSON
    res.status(500).json({ error: err.message });
  }
};



exports.updateSalaryByEmployeeId = async (req, res) => {
  const { employeeId } = req.params;
  const { salary } = req.body;

  if (!salary) {
    return res.status(400).json({ error: 'Salary is required' });
  }

  try {
    const updated = await Salary.findOneAndUpdate(
      { employeeId },
      { salary },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
