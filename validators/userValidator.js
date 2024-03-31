const Joi = require('@hapi/joi');

const userSchema = Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid('Admin', 'User').required()
});

module.exports = { userSchema };
