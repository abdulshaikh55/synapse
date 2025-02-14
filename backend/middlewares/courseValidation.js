const Joi = require("joi");
const { body, validationResult } = require('express-validator');

// Validation schema for course data
const courseValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    tags: Joi.string().required(),
    pricing: Joi.string().valid('free', 'freemium', 'paid').required(),
    certificate_included: Joi.boolean().required(),
    provider: Joi.string().min(3).max(50).required(),
    url: Joi.string().uri().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error: error.details });
  }
  next();
};

module.exports = { courseValidation };