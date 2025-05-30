const Signup = require('../models/Signup');// first of All we have to import the schema of the Employee model

exports.addSignup = async (req, res) => {
  try {
    const user = new Signup(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    // Fix: use 'err', not 'error' here
    console.error('Error adding Signup:', err);
    res.status(400).json({ error: err.message });
  }
};
exports.getSignups = async (req, res) => {
  try {
    const signups = await Signup.find();
    console.log('Signups fetched:', signups); // Add this to check data
    res.json(signups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
