import Joi from "joi";
export const CandidateEducationSchema = Joi.object({
    educationId : Joi.string(),
    degree : Joi.string().valid('MASTER', 'BACHELORS', 'ENGINEER').required(),
    major : Joi.string(),
    startYear : Joi.date(),
    endYear : Joi.date()
})