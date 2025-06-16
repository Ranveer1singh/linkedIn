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
    /**
     * list 
     */
    public async list(req : Request, res : Response) {
        let  {page = 1 ,limit = 5, filter = " "
        } = req.query
        page = parseInt(page as string)
        limit = parseInt(limit as string)
        filter = filter as string
        const {list, totalCount} = await companyService.readAll({page , limit , filter})
        res.status(HTTP_STATUS.OK).json({
            message : "company fetch succesfully",
            data : list,
            totalCount
        })
    }
    /**
     * list 
     */
    public async myCompany(req : Request, res : Response) {
        const companyDetails = await companyService.readMy(req.currentUser)
        res.status(HTTP_STATUS.OK).json({
            message : "company fetch succesfully",
            data : companyDetails
        })
    }
    /**
     * SINGLE COMPANY 
     */
    public async readOne(req : Request, res : Response) {
        const {Id} = req.params
        const companyDetails = await companyService.readOne(Id)
        res.status(HTTP_STATUS.OK).json({
            message : "company fetch succesfully",
            data : companyDetails
        })
    }

    /**
     * update company details
     */
    public async update(req : Request, res : Response) {
        const {Id} = req.params
         const companyDetails = await companyService.updateCompany(Id, req.body, req.currentUser)
        res.status(HTTP_STATUS.OK).json({
            message : "company details updated  succesfully",
            data : companyDetails
        })
    }
    /**
     * update company details
     */
    public async actionONCompany(req : Request, res : Response) {
        const {Id} = req.params
        const {isApproved} = req.body
         const companyDetails = await companyService.action(Id, isApproved)
        res.status(HTTP_STATUS.OK).json({
            message : "company details updated  succesfully",
            data : companyDetails
        })
    }
    /**
     * update company details
     */
    public async deleteCompany(req : Request, res : Response) {
        const {Id} = req.params
       
         const companyDetails = await companyService.delete(Id)
        res.status(HTTP_STATUS.OK).json({
            message : "company deleted succesfully",
            // data : companyDetails
        })
    }
}

export const  companyController : CompanyController = new CompanyController()