const express = require('express');
const router = express.Router();
const { postCar, getBookings } = require('../controllers/adminController');
const { validateCarData } = require('../middleware/joiValidator');

router.post('/cars', validateCarData, postCar);
router.get('/bookings', getBookings);

module.exports = router;
