import { Request, Response } from "express";
import { candidateSkillService } from "../service/candidate-skill";
import HTTP_STATUS from "~/globals/constant/http.constant";

class CandidateSkillController {

    /**
     * addSkill
     */
    public async addSkill(req : Request , res : Response) {
        const candidateSkill = await candidateSkillService.create(req.body, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "Skill Added Successfully",
            data : candidateSkill
        })
    }
    /**
     * Get all Skill
     */
    public async findSkill(req : Request , res : Response) {
        const candidateSkill = await candidateSkillService.getSkills()
        res.status(HTTP_STATUS.CREATE).json({
            message : "Skill found Successfully",
            data : candidateSkill
        })
    }
    /**
     * Get my Skill
     */
    public async mySkill(req : Request , res : Response) {
        const candidateSkill = await candidateSkillService.getMySkills(req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "Skill found Successfully",
            data : candidateSkill
        })
    }
    /**
     * remove Skill
     */
    public async deleteSkill(req : Request , res : Response) {
        const {skillName} = req.params;
        const candidateSkill = await candidateSkillService.removeSkills(skillName,req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "Skill removed Successfully",
            data : candidateSkill
        })
    }
}

export const candidateSkillController: CandidateSkillController = new CandidateSkillController()