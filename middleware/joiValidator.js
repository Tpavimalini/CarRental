const { carSchema } = require('../validators/carValidator');
const { userSchema } = require('../validators/userValidator');
const { bookingSchema } = require('../validators/bookingValidator');

const validateCarData = (req, res, next) => {
    const { error } = carSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateUserData = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateBookingData = (req, res, next) => {
    const { error } = bookingSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateCarData, validateUserData, validateBookingData };
