import { NextFunction, Request, Response } from "express";
import { candidateProfileService } from "../service/candidate-profile";
import HTTP_STATUS from "~/globals/constant/http.constant";

class CandidateProfileController {

/**
 * create 
 */
public async create ( req : Request, res : Response, next : NextFunction) {
    const candidateProfile = await candidateProfileService.create(req.body, req.currentUser);
    res.status(HTTP_STATUS.CREATE).json({
        message : "Candidate Creaate Successfully",
        data : candidateProfile
    })
}

}

export const candidateProfileController : CandidateProfileController = new CandidateProfileController()