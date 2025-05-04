import prisma from "~/prisma"

class CandidateProfileService {
    /**
     * create
     */
    public async create(reqBody: any, currentUser : UserPayload) {
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
}

export const candidateProfileService: CandidateProfileService = new CandidateProfileService()