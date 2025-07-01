import { Request, Response } from "express"
import { jobRoleService } from "../service/job-role.service"
import HTTP_STATUS from "~/globals/constant/http.constant"

class JobRoleController {
    /**
     * add job role
     */
    public async addRole(req: Request, res: Response) {
        const {name} = req.body
       const role = await jobRoleService.addRole(name)
       res.status(HTTP_STATUS.CREATE).json({
        message : "created successfullyy",
        data : role
       })
    }
    /**
     * get all  job role
     */
     public async getRole(req: Request, res: Response) {
       const role = await jobRoleService.getAllRole()
       res.status(HTTP_STATUS.OK).json({
        message : "get successfullyy",
        data : role
       })
    }
    /**
     * delete job role
     */
    public async deleteRole(req: Request, res: Response) {
       const {name} = req.params
       const role = await jobRoleService.deleteRole(name)
       res.status(HTTP_STATUS.OK).json({
        message : "created successfullyy",
        data : role
       })
    }
    /**
     * update job role
     */
    public async updateRole(req: Request, res: Response) {
        const {Rolename} = req.params
        const {name} = req.body
       const role = await jobRoleService.updateRole(Rolename, name)
       res.status(HTTP_STATUS.OK).json({
        message : "created successfullyy",
        data : role
       })
    }
}
export const jobRoleController = new JobRoleController()