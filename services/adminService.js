// Sample data for cars
let cars = {};
let carIdCounter = 1;

// Sample data for bookings
let bookings = {};

// API endpoint for admin to post cars
function postCar(req, res) {
    const { name, seats } = req.body;
    const id = carIdCounter++;
    const car = { id, name, seats, available: true };
    cars[id] = car;
    res.status(201).json(car);
}

// API endpoint for admin to see bookings
function getBookings(req, res) {
    const bookedCars = [];
    for (const carId in bookings) {
        const booking = bookings[carId];
        const car = cars[carId];
        if (car) {
            bookedCars.push({ car, date: booking.date, userId: booking.userId });
        }
    }
    res.status(200).json(bookedCars);
}

module.exports = { postCar, getBookings };
