import prisma from "~/prisma";
import { candidateProfileService } from "./candidate-profile";
import { CandidateSkill, skill } from "generated/prisma";
import { NotFoundException } from "~/globals/cores/error.core";

class CandidateSkillService {

    private async findSkill(name : string): Promise<skill>{
        const skill = await prisma.skill.findUnique({
            where : {name}
        })

        if(!skill) throw new NotFoundException(`skill ${name} Not found `)

            return skill;
    }
    /**
     * async create
     */
    public async create(body : any , currentUser : UserPayload) {
            const {skillName}= body;
            const currentUserProfile = await candidateProfileService.readByUserId(currentUser.id)
            await this.findSkill(skillName)
            const candidateSkill = await prisma.candidateSkill.create({
                data : {
                    candidateProfileId : currentUserProfile.id,
                    skillName
                }
            })
            
            return candidateSkill;

    }

    /**
     * getMySkills
     */
    public async getSkills():Promise<CandidateSkill[]> {

        const skills = await prisma.candidateSkill.findMany()
        return skills
        
    }
    /**
     * getMySkills
     */
    public async getMySkills(currentUser :UserPayload):Promise<CandidateSkill[]> {

        const curreUserProfile = await candidateProfileService.readByUserId(currentUser.id)
        const skill = await prisma.candidateSkill.findMany({
            where : {
                candidateProfileId : curreUserProfile.id
            }
        })
        return skill
        
    }
    /**
     * remove skills
     */
    public async removeSkills(skillName: string, currentUser :UserPayload) {

      await this.findSkill(skillName)
            const curreUserProfile = await candidateProfileService.readByUserId(currentUser.id)
            const skill = await prisma.candidateSkill.delete({
                where : {
                    candidateProfileId_skillName : {
                        candidateProfileId : curreUserProfile.id,
                        skillName
                    }
                }
            })
            return skill
        
    }

}

export const candidateSkillService: CandidateSkillService = new CandidateSkillService()