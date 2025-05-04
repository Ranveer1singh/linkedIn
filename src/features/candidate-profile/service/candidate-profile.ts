import { CandidateProfile } from "generated/prisma"
import { BadRequestException } from "~/globals/cores/error.core"
import prisma from "~/prisma"
import { IcandidateProfile } from "../interface/cnadidate-profile.interface"

class CandidateProfileService {
    /**
     * create
     */
    public async create(reqBody: IcandidateProfile, currentUser : UserPayload) {
        // validate reqBody for more safty and error handling
        try {
            const { fullName, gender, phone, cv, birthDate, address } = reqBody
            const candidateProfile = await prisma.candidateProfile.create({
                data: {
                    fullName, gender, phone, cv, birthDate, address, userId : currentUser.id
                }
            })
    
            return candidateProfile
        } catch (error) {
            console.log(error)
        }

    }

    /**
     * readAll
     */
    public async readAll():Promise<CandidateProfile[]> {
        const allProfiles : CandidateProfile[] = await prisma.candidateProfile.findMany();
        if(!allProfiles) throw new BadRequestException("Candidates Not found")
        return allProfiles
    }

    /**
     * readOne
     */
    public async readOne(id : string):Promise<CandidateProfile>  {
        const candiate : CandidateProfile | null =  await prisma.candidateProfile.findUnique({
            where : {id}
        })
        
        if(!candiate) throw new BadRequestException("Candidate Not Found")
        return candiate
    }

    /**
     * update
     */
    public async update(id : string, reqBody : IcandidateProfile) :Promise<CandidateProfile>{

        await this.readOne(id);
        const updateProfile : CandidateProfile = await prisma.candidateProfile.update({
            where : {id},
            data : reqBody
        })

        return updateProfile
        
    }

    /**
     * delete
     */
    public async delete(id: string) : Promise<void> {
        await this.readOne(id);

        await prisma.candidateProfile.delete({
            where : {id}
        })
    }
}

export const candidateProfileService: CandidateProfileService = new CandidateProfileService()