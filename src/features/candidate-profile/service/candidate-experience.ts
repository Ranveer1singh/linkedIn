import prisma from "~/prisma"
import { candidateProfileService } from "./candidate-profile"
import { BadRequestException } from "~/globals/cores/error.core"
import { ICandidateExperience } from "../interface/candidate-experience"

class CandidateExperienceService {


    private async findOne(id : string , currentUser : UserPayload) {
        const currentUserProfile = await candidateProfileService.readByUserId(currentUser.id)
        const experience = await prisma.candidateExperience.findUnique({
            where : {
                id,
                candidateProfileId : currentUserProfile.id
            }
        })
        if(!experience) throw new BadRequestException(`Not found your experience`)

            return experience
    }
    /**
     * create
     */
    public async create(body: ICandidateExperience, currentUser: UserPayload) {
        try {
            const {
                company,
                department,
                startDate,
                endDate,
                responsibility
            } = body
            const currentUserProfile = await candidateProfileService.readByUserId(currentUser.id)
            const candidateExperience = await prisma.candidateExperience.create({
                data : {
                    company,
                department,
                startDate : new Date(startDate),
                endDate:new Date(endDate),
                responsibility,
                    candidateProfileId : currentUserProfile.id
                }
            })
            return candidateExperience
        } catch (error) {
            console.log(error   )
            throw new BadRequestException((error as any).message)
        }

    }

    /**
     * get all 
     */
    public async getall() {
        const list = await prisma.candidateExperience.findMany()
        return list
        
    }
    /**
     * get my experiences
     */
    public async myExperience(currentUser : UserPayload) {
        const currentUserProfile = await candidateProfileService.readByUserId(currentUser.id)
        
        const list = await prisma.candidateExperience.findMany({
            where :  {
                candidateProfileId : currentUserProfile.id
            }
        })
        return list
        
    }
    /**
     * delete  experiences
     */
    public async removeExperience(id : string,currentUser : UserPayload) {
        const currentUserProfile = await candidateProfileService.readByUserId(currentUser.id)
        await this.findOne(id, currentUser)
        await prisma.candidateExperience.delete({
            where :  {
                id,
                candidateProfileId : currentUserProfile.id
            }
        })
        return "deleted successfully"
        
    }
    /**
     * delete  experiences
     */
    public async updateExperience(id : string,currentUser : UserPayload, body : any) {
        const {
                company,
                department,
                startDate,
                endDate,
                responsibility
            } = body
        const currentUserProfile = await candidateProfileService.readByUserId(currentUser.id)
        await this.findOne(id, currentUser)
       const list =  await prisma.candidateExperience.update({
            where :  {
                id,
                candidateProfileId : currentUserProfile.id
            }, 
            data : {
                 
                    company,
                department,
                startDate : new Date(startDate),
                endDate:new Date(endDate),
                responsibility,
                    // candidateProfileId : currentUserProfile.id
                
            }
        })
        return list
        
    }
}

export const candidateExperienceService: CandidateExperienceService = new CandidateExperienceService()