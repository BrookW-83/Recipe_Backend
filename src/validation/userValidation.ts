import Joi from 'joi';

export const projectSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

