import { Request, Response } from "express";
import { companyService } from "../service/company-service";
import HTTP_STATUS from "~/globals/constant/http.constant";

class CompanyController {

    /**
     * addComapny
     */
    public async addComapny(req : Request, res : Response) {
        const companyDetails = await companyService.create(req.body, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "company added succesfully",
            data : companyDetails
        })
    }
}

export const  companyController : CompanyController = new CompanyController()