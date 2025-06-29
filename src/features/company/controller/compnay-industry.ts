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
        res.status(HTTP_STATUS.OK).json({
            message : "Industry added successfully into company",
            data  : companyIndustry
        })
    }
    /**
     * read compnay Industry
     */
    public async list(req : Request, res : Response) {
        const {companyId} = req.params
        const companyIndustry = await companyIndustryService.read(companyId)
        res.status(HTTP_STATUS.CREATE).json({
            message : "Industry fetch successfully into company",
            data  : companyIndustry
        })
    }
    /**
     * read compnay Industry
     */
    public async remove(req : Request, res : Response) {
        const {industryName} = req.body
        const {companyId} = req.params
        const companyIndustry = await companyIndustryService.detele(companyId ,industryName, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "Industry delete successfully into company",
            data  : companyIndustry
        })
    }
}

export const companyIndustryController = new CompanyIndustryController()