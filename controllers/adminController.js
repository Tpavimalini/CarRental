const adminService = require('../services/adminService');
const { carSchema } = require('../validators/carValidator');

const postCar = async (req, res) => {
    try {
        const { name, seats } = req.body;
        const { error } = carSchema.validate({ name, seats });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const car = await adminService.postCar(name, seats);
        res.status(201).json(car);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getBookings = async (req, res) => {
    try {
        const bookings = await adminService.getBookings();
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { postCar, getBookings };
