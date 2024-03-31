const Joi = require('@hapi/joi');

const bookingSchema = Joi.object({
    userId: Joi.string().required(),
    carId: Joi.string().required(),
    date: Joi.date().iso().required()
});

module.exports = { bookingSchema };
