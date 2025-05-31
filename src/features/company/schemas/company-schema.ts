import Joi from 'joi';

export const companySchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  description: Joi.string().min(1).max(1000).required(),
  teamSize: Joi.number().integer().required(),
  establishedDate: Joi.date().iso().required(),
  websiteUrl: Joi.string().uri().required(),
  mapLink: Joi.string().uri().required(),
  address: Joi.string().min(1).max(500).required()
});
