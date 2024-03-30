// Sample data for cars
let cars = {};
let carIdCounter = 1;

// Sample data for bookings
let bookings = {};

// API endpoint for users to rent cars
function rentCar(req, res) {
    const { carId, date, userId } = req.body;
    const car = cars[carId];
    if (!car) {
        return res.status(404).json({ error: "Car not found" });
    }
    if (!car.available) {
        return res.status(400).json({ error: "Car already booked for this date" });
    }
    const booking = { carId, date, userId };
    bookings[carId] = booking;
    car.available = false;
    res.status(200).json({ message: "Car booked successfully", booking });
}

module.exports = { rentCar };
