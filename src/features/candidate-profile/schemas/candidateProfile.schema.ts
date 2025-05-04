import Joi from "joi"

export const CandidateProfileCreateSchema = Joi.object({
    fullName: Joi.string().min(2).max(100).required(),
  gender: Joi.string().valid('MALE', 'FEMALE').required(),
  phone: Joi.string().required(), // assuming 10-digit number
  cv: Joi.string().required(), // assuming CV is a link (URL)
//   cv: Joi.string().uri().required(), // assuming CV is a link (URL)
  birthDate: Joi.date().iso().required(),
//   birthDate: Joi.string().isoDate().required(),
  address: Joi.string().min(5).max(200).required(),
})