const Joi = require('@hapi/joi');

const registerValidation = (data) =>{
    const schema = Joi.object({
        voornaam: Joi.string().min(2).required(),
        achternaam: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        wachtwoord: Joi.string().min(5).required()
    });
    return schema.validate(data);
}

const loginValidation = (data) =>{
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        wachtwoord: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
