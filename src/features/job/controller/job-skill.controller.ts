import { Request, Response } from "express";
import { jobService } from "../service/job-service";
import HTTP_STATUS from "~/globals/constant/http.constant";
import { jobSkillService } from "../service/jobSkill.service";

class JobSkillController {

    /**
     * createJob
     */
    public async createJobSkill(req: Request, res : Response) {
        console.log("request to controller")
        const job = await jobSkillService.createJobSkill(req.body, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "JOb skill  is created Successfully",
            data : job
        })
    }
    /**
     * Read All with filters
     */
    public async getAll(req: Request, res : Response) {
        console.log("request--->>>",)
        
        // const {page = 1, limit= 5 , filter = '' , minSalary = 0} = req.query
        const list = await jobSkillService.getSkillsByJob(req.params.jobId)
        res.status(HTTP_STATUS.CREATE).json({
            message : "GEt all JOb skill  Successfully",
                data : list
        })
    }
    /**
     * update 
     */
    public async removeJobSkill(req: Request, res : Response) {
        console.log("jabscjba")
        const {id, skillName} = req.params;
        const job = await jobSkillService.removeJobSkill(id,skillName)
        res.status(HTTP_STATUS.CREATE).json({
            message : "JOb skill is remove Successfully",
            data : job
        })
    }
}

export const jobSkillController = new JobSkillController()