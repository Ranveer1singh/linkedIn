import { Request, Response } from "express";
import { jobService } from "../service/job-service";
import HTTP_STATUS from "~/globals/constant/http.constant";

class JobController {

    /**
     * createJob
     */
    public async createJob(req: Request, res : Response) {
        const job = await jobService.create(req.body, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "JOb is created Successfully",
            data : job
        })
    }
}

export const jobController = new JobController()