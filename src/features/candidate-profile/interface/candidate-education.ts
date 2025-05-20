import { DEGREE } from "generated/prisma";

export interface ICandidateEducation {
    educationId : string;
    degree : DEGREE;
    major : string;
    startYear : Date;
    endYear :  Date;

}