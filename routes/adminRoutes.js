const express = require('express');
const adminController = require('../services/adminService');
const { validateAdminData } = require('../middleware/validationMiddleware');

const router = express.Router();

// API endpoint for admin to post cars
router.post('/cars', validateAdminData, adminController.postCar);

// API endpoint for admin to see bookings
router.get('/bookings', adminController.getBookings);

module.exports = router;
