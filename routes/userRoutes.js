const express = require('express');
const router = express.Router();
const { rentCar } = require('../controllers/userController');
const { validateBookingData } = require('../middleware/joiValidator');

router.post('/rent', validateBookingData, rentCar);

module.exports = router;
