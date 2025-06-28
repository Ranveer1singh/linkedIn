import Joi from 'joi';

export const companyIndustrySchema = Joi.object({
  companyId: Joi.string().required(),
  industryName: Joi.string().required(),
});