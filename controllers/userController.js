const userService = require('../services/userService');
const { bookingSchema } = require('../validators/bookingValidator');

const rentCar = async (req, res) => {
    try {
        const { userId, carId, date } = req.body;
        const { error } = bookingSchema.validate({ userId, carId, date });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const booking = await userService.rentCar(userId, carId, date);
        res.status(200).json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { rentCar };
