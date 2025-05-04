import { Gender } from "generated/prisma";

export interface IcandidateProfile {
    fullName : string;
    gender : Gender;
    phone : string;
    birthDate : string;
    cv : string;
    address : string

}