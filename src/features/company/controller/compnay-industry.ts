import { Request, Response } from "express";
import { companyIndustryService } from "../service/company-industry";
import HTTP_STATUS from "~/globals/constant/http.constant";

class CompanyIndustryController {
    /**
     * add Industry
     */
    public async addIndustry(req : Request, res : Response) {
        const {industryName} = req.body
        const {companyId} = req.params
        const companyIndustry = await companyIndustryService.addIndustry(companyId, industryName, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "Industry added successfully into company",
            data  : companyIndustry
        })
    }
}

export const companyIndustryController = new CompanyIndustryController()