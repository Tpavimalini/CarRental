const { DynamoDBClient, PutItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { ClientInstance } = require('../models/index');
const Car = require('../models/Car');

const postCar = async (name, seats) => {
    const car = Car(null, name, seats);
    const params = {
        TableName: 'Cars',
        Item: {
            'Name': { S: car.name },
            'Seats': { N: car.seats.toString() },
            'IsBooked': { BOOL: car.isBooked }
        }
    };
    try {
        await ClientInstance.send(new PutItemCommand(params));
        return car;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to add car');
    }
};

const getBookings = async () => {
    const params = { TableName: 'Cars' };
    try {
        const data = await ClientInstance.send(new ScanCommand(params));
        const cars = data.Items.map(item => Car(null, item.Name.S, parseInt(item.Seats.N)));
        return cars;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get bookings');
    }
};

module.exports = { postCar, getBookings };
