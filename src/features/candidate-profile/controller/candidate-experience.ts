import { Request, Response } from "express";
import { candidateExperienceService } from "../service/candidate-experience";
import HTTP_STATUS from "~/globals/constant/http.constant";

class CandidateExperienceController {


    /**
     * addExperience
     */
    public async addExperience(req : Request, res: Response) {
        const candidateExperience = await candidateExperienceService.create(req.body, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : `experience add successfully`,
            data : candidateExperience
        })
    }

    /**
     * getAllExperience
     */
    public async getAllExperience(req : Request, res: Response) {
        const list = await candidateExperienceService.getall()
        res.status(HTTP_STATUS.OK).json({
            message : "experience fetch successfully",
            data : list
        })
    }
    /**
     * getAllExperience
     */
    public async getMyExperience(req : Request, res: Response) {
        const list = await candidateExperienceService.myExperience(req.currentUser)
        res.status(HTTP_STATUS.OK).json({
            message : "experience fetch successfully",
            data : list
        })
    }
    /**
     * delete 
     */
    public async deleteExperience(req : Request, res: Response) {
        const {id} = req.params
        const list = await candidateExperienceService.removeExperience(id, req.currentUser)
        res.status(HTTP_STATUS.OK).json({
            message : list
        })
    }
    /**
     * edit 
     */
    public async editExperience(req : Request, res: Response) {
        const {id} = req.params
        const list = await candidateExperienceService.updateExperience(id, req.currentUser, req.body)
        res.status(HTTP_STATUS.OK).json({
            message : list
        })
    }
}

export const candidateExperience : CandidateExperienceController = new CandidateExperienceController()