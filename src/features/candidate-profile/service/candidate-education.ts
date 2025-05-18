import prisma from "~/prisma";
import { candidateProfileService } from "./candidate-profile";
import { NotFoundException } from "~/globals/cores/error.core";
import { CandidateEducation, Education } from "generated/prisma";

class CandidateEducationService {

    private async findEducation(educationId: string): Promise<Education> {
        const education = await prisma.education.findUnique({
            where: { id: educationId }
        })
        if(!education) throw new NotFoundException(`Education with id ${educationId} not found`)
        return education
    }
    /**
     * addEducation
     */
    public async addEducation(body: any, currentUser: UserPayload) {
        const { educationId, startYear, endYear, degree, major } = body;
       await this.findEducation(educationId);
        const currentUserProfile = await candidateProfileService.readByUserId(currentUser.id)
        const candidateEducation = await prisma.candidateEducation.create({
            data: {
                candidateProfileId: currentUserProfile.id,
                educationId,
                startYear,
                endYear,
                degree,
                major
            }
        })

        return candidateEducation
    }

    /**
     * allEducation
     */
    public async  allEducation() : Promise<CandidateEducation[]> {
        const allEducations = await prisma.candidateEducation.findMany()
        return allEducations
    }
    /**
     * My Education
     */
    public async  myEducation(currentUser : UserPayload) : Promise<CandidateEducation[]> {
        const currentUserProfile = await candidateProfileService.readByUserId(currentUser.id)
        const myEducations = await prisma.candidateEducation.findMany({
            where : {candidateProfileId :currentUserProfile.id
            }
        })
        return myEducations
    }

    /**
     * update
     */
    public async updateCandidateEducation(educationId : string , body : any, currentUser: UserPayload) {
        const {major , degree, startYear, endYear} = body;
        await this.findEducation(educationId)
        const currentUserProfile = await candidateProfileService.readByUserId(currentUser.id)
        const updateDoc = await prisma.candidateEducation.update({
            where : {
                candidateProfileId_educationId : {
                    candidateProfileId : currentUserProfile.id,
                    educationId : educationId
                }
            },
            data : {
                major , degree, startYear, endYear
            }
        })
        return updateDoc
    }
}

export const candidateEducationService: CandidateEducationService = new CandidateEducationService();