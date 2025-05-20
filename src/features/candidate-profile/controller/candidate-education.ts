import { Request, Response } from "express";
import { candidateEducationService } from "../service/candidate-education";
import { rmSync } from "fs";
import HTTP_STATUS from "~/globals/constant/http.constant";

class CandidateEducation {

    /**
     * addEducation
     */
    public async addEducation(req : Request, res : Response) {

        const candidateEducation = await candidateEducationService.addEducation(req.body, req.currentUser)
        res.status(HTTP_STATUS.CREATE).json({
            message : "Education added succefully",
            data : candidateEducation
        })
    }
    /**
     * readAll
     */
    public async readAll(req : Request, res : Response) {
        const educations = await candidateEducationService.allEducation();
        res.status(HTTP_STATUS.OK).
        json({
            message : "ALl Education",
            data : educations
        })
    }
    /**
     * read my education
     */
    public async readMyEducation(req : Request, res : Response) {
        const educations = await candidateEducationService.myEducation(req.currentUser);
        res.status(HTTP_STATUS.OK).
        json({
            message : "ALl Education",
            data : educations
        })
    }

    /**
     * udpateEducation
     */
    public async udpateEducation(req : Request, res : Response) {
        const {educationId} = req.params
        const updaetEducation = await candidateEducationService.updateCandidateEducation(educationId, req.body, req.currentUser)
        res.status(HTTP_STATUS.OK).json({
            message : "education details updated",
            data : updaetEducation
        })
    }
    /**
     * deleteEducation
     */
    public async deleteEducation(req : Request, res : Response) {
        const {educationId} = req.params
        const Education = await candidateEducationService.removeEducation(educationId,  req.currentUser)
        res.status(HTTP_STATUS.OK).json({
            message : Education,
        })
    }
}

export  const candidateEducation : CandidateEducation = new CandidateEducation();