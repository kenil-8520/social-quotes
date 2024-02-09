const Joi = require('joi')

const userSchema = Joi.object({
    first_name: Joi.string()
        .pattern(/^\d+$/, { invert: true })
        .min(3)
        .max(155)
        .trim(true)
        .required(),
    last_name: Joi.string()
        .pattern(/^\d+$/, { invert: true })
        .min(3)
        .max(155)
        .trim(true)
        .required(),
    email:Joi.string()
        .email()
        .trim(true)
        .required(),
    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .min(8)
        .trim(true)
        .required(),
});

module.exports = userSchema;
