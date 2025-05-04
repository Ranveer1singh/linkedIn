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

/**
 * readAll
 */
public async readAll(req : Request, res:Response , next :NextFunction) {
    const candiates = await candidateProfileService.readAll();
    res.status(HTTP_STATUS.OK).json({
        message : "All candidates found successfully",
        data : candiates
    })
    
}

/**
 * readOne
 */
public async readOne(req : Request, res:Response , next :NextFunction) {
    const {id} = req.params
  const candiate = await candidateProfileService.readOne(id)   
  res.status(HTTP_STATUS.OK).json({
    message : "Candidate Profile Found SuccessFully",
    data : candiate
  })
}


/**
 * update
 */
public async update(req : Request, res:Response , next :NextFunction) {
    const{id} = req.params
    const updateProfile = await candidateProfileService.update(id , req.body)
    res.status(HTTP_STATUS.OK).json({
        message : "Profile Update successFully",
        data : updateProfile
    })
}
}

export const candidateProfileController : CandidateProfileController = new CandidateProfileController()