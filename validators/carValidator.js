const Joi = require('@hapi/joi');

const carSchema = Joi.object({
    name: Joi.string().required(),
    seats: Joi.number().integer().min(1).required()
});

module.exports = { carSchema };
