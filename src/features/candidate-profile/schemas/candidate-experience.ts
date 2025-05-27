import Joi from "joi"

export const candidateExperienceSchema = Joi.object({
  company: Joi.string().required(),
  department: Joi.string().required(),
  startDate: Joi.date().iso().required(),  // expects format like "2022-01-01"
  endDate: Joi.date().iso().required(),
  responsibility: Joi.string().required()
});