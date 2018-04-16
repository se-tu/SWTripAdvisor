const Joi = require('joi');

const validateName = name => {

    const schema = {
        name: Joi.string()
    };

    const {error, value} = Joi.validate({ name }, schema);

    return {error, value}
}

const validateScore = score => {

    const schema = {
        score: Joi.number().integer().min(1).max(5)
    };

    console.log('score', score)
    const {error, value} = Joi.validate({ score }, schema);

    return {error, value}
}

module.exports = {
    validateName,
    validateScore
}