const express = require('express');
const userController = require('../services/userService');
const { validateUserData } = require('../middleware/validationMiddleware');

const router = express.Router();

// API endpoint for users to rent cars
router.post('/rent', validateUserData, userController.rentCar);

module.exports = router;
