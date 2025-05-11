import Joi from "joi"

export const CandidateLanguageCreateSchema = Joi.object({
    languageName: Joi.string().min(2).max(100).required(),
  level: Joi.string().valid('NATIVE', 'BACIS', 'FLUENT').required(),
})