import prisma from "~/prisma";
import { candidateProfileService } from "./candidate-profile";
import { CandidateLanguage, Level } from "generated/prisma";
import { IcandidateLanguage } from "../interface/candidateLanguage";

class CandidateLanguageService {

    /**
     * addLanguage
     */
    public async addLanguage(reqBody : IcandidateLanguage, currentUser : UserPayload)  {
        try {
            const { languageName, level} = reqBody;
    
            const candidateProfile = await candidateProfileService.readByUserId(currentUser.id);
    
            const candidateLanguage = await prisma.candidateLanguage.create({
                data : {
                    candidateProfileId : candidateProfile.id,
                    languageName,
                    level
                }
            })
            
            return candidateLanguage;
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * get all langauge 
     */
    public async getLanguage() : Promise<CandidateLanguage[]>  {
        const candidateLanguages : CandidateLanguage[] = await prisma.candidateLanguage.findMany();

        return candidateLanguages
    }
    /**
     * get Own langauge 
     */  
    public async myLanguage(currentUser : UserPayload)  {
        const candidateProfile = await candidateProfileService.readByUserId(currentUser.id);
        const candidateLanguage:CandidateLanguage[] = await prisma.candidateLanguage.findMany({
            where : {candidateProfileId : candidateProfile.id}
        })
        return candidateLanguage 
    }

    /**
     * updateLangugeLevel
     */
    public  async updateLangugeLevel(currentUser : UserPayload , languageName : string, level : Level ) {
       try {
        const candidateProfile = await candidateProfileService.readByUserId(currentUser.id);

         const updateLevel = await prisma.candidateLanguage.update({
             where : {
                candidateProfileId_languageName : {
                    candidateProfileId : candidateProfile.id,
                    languageName
                }
             },
             data : {level}
         })
        //  console.log("updateLevel",updateLevel)
         return updateLevel
       } catch (error) {
        console.log(error)
       }
    }
    /**
     * deleteLanguage
current     */
    public async deleteLanguage(currentUser : UserPayload, languageName : string) {
        const candidateProfile = await candidateProfileService.readByUserId(currentUser.id);
        const deletedItem = await prisma.candidateLanguage.delete({
            where : {
                candidateProfileId_languageName : {
                    candidateProfileId : candidateProfile.id,
                    languageName
                }
            }
        })

        return deletedItem
    }
   
}
export const candidateLanguageService : CandidateLanguageService = new CandidateLanguageService()