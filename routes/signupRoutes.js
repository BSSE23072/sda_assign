const express = require('express');
const router = express.Router();
const controller = require('../controllers/signupController');

// CRUD Routes
router.post('/', controller.addSignup);          // Create
router.get('/', controller.getSignups);             // Read all

module.exports = router;
