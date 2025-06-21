import { Request, Response } from "express";
import { companyImageService } from "../service/company-image";
import HTTP_STATUS from "~/globals/constant/http.constant";

class CompanyImageController {

    /**
     * add image 
     */
    public async add(req:Request, res : Response) {
        const {companyId} = req.params
        await companyImageService.addImage(companyId, req.currentUser, req.files as Express.Multer.File[])
        res.status(HTTP_STATUS.CREATE).json({
            message : "Add image done"
        })
    }
    public async listImage(req:Request, res : Response) {
        const {companyId} = req.params
        const list = await companyImageService.readAll(companyId)
        res.status(HTTP_STATUS.CREATE).json({
            message : "Add image done",
            data : list
        })
    }
}

export const companyImageController : CompanyImageController = new CompanyImageController()