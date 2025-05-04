import { NextFunction, Request, Response } from "express";
import { candidateProfileService } from "../service/candidate-profile";
import HTTP_STATUS from "~/globals/constant/http.constant";
import { boolean } from "joi";

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
public async readAll(req : Request, res:Response) {
    const candiates = await candidateProfileService.readAll();
    res.status(HTTP_STATUS.OK).json({
        message : "All candidates found successfully",
        data : candiates
    })
    
}

/**
 * readOne
 */
public async readOne(req : Request, res:Response) {
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
public async update(req : Request, res:Response) {
    const{id} = req.params
    const updateProfile = await candidateProfileService.update(id , req.body)
    res.status(HTTP_STATUS.OK).json({
        message : "Profile Update successFully",
        data : updateProfile
    })
}

/**
 * async delete
 */
public async delete(req : Request, res:Response) {
     
    const {id} = req.params;
    await candidateProfileService.delete(id);
    res.status(HTTP_STATUS.OK).json({
        message : "Profile Deleted Succesfully"
    })
    
}

/**
 * toggelOpenToWork
 */
public async toggelOpenToWork(req : Request, res:Response) {
    const {id} = req.params
    const {openToWork} = req.body 
   
   const OpenWork =  await candidateProfileService.toggelOpenToWork(id,(openToWork as boolean))
    res.status(HTTP_STATUS.OK).json({
        message : OpenWork
    })
}

}

export const candidateProfileController : CandidateProfileController = new CandidateProfileController()