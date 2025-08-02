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
    /**
     * Read All with filters
     */
    public async getAll(req: Request, res : Response) {
        console.log("request--->>>",)

        const {page = 1, limit= 5 , filter = '' , minSalary = 0} = req.query
        const {job , totalCount} = await jobService.readAll({
            page : parseInt(page as string),
            limit : parseInt(limit as string),
            filter, 
            minSalary : parseFloat(minSalary as string)

        })
        res.status(HTTP_STATUS.CREATE).json({
            message : "GEt all JOb  Successfully",
            pagination :{
                totalCount,
                currentPage : parseInt(page as string)
            },
                data : job
        })
    }
    /**
     * update 
     */
    public async updateJob(req: Request, res : Response) {
        console.log("jabscjba")
        const {id, companyId} = req.params;
        const job = await jobService.updateJob(id,companyId,req.body, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "JOb is update Successfully",
            data : job
        })
    }
    /**
     * update 
     */
    public async updateStatus(req: Request, res : Response) {
        const {id, companyId} = req.params;
        const job = await jobService.updateJobStatus(id,companyId,req.body.status, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "JOb status is update Successfully",
            data : job
        })
    }
}

export const jobController = new JobController()