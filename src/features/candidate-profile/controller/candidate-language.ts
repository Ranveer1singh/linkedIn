import { Request, Response } from "express";
import { candidateLanguageService } from "../service/candidate-language";
import HTTP_STATUS from "~/globals/constant/http.constant";

class CandidateLanguageController {

    /**
     * create
     */
    public async create(req : Request, res:Response) {
        const candidateLanguage = await candidateLanguageService.addLanguage(req.body, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "Language added Successfully",
            data : candidateLanguage
        })
        
    }
    /**
     * Read all
     */
    public async readAll(req : Request, res:Response) {
        const candidateLanguages = await candidateLanguageService.getLanguage()
        res.status(HTTP_STATUS.OK).json({
            message : "Get All Language Successfully",
            data : candidateLanguages
        })
        
    }
    /**
     * get own language
     */
    public async readMyLanguage(req : Request, res:Response) {
        const candidateLanguages = await candidateLanguageService.myLanguage(req.currentUser)
        res.status(HTTP_STATUS.OK).json({
            message : "Get All Language Successfully",
            data : candidateLanguages
        })
        
    }
    public async updateLanguageLevel(req : Request, res:Response){
        const {languageName} = req.params;
        const {level} = req.body;
        const candidateLanguages = await candidateLanguageService.updateLangugeLevel(req.currentUser ,languageName,level )
        res.status(HTTP_STATUS.OK).json({
            message : "update Language Successfully",
            data : candidateLanguages
        })
    }
    public async removeCandidateLanguage(req : Request, res:Response){
        const {languageName} = req.params;
        const candidateLanguages = await candidateLanguageService.deleteLanguage(req.currentUser ,languageName)
        res.status(HTTP_STATUS.OK).json({
            message : " Language deleted Successfully",
            data : candidateLanguages
        })
    }
}

export const candidateLanguageController : CandidateLanguageController = new CandidateLanguageController()