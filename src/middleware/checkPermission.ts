import { NextFunction, Request, Response } from "express";
import { ForbidoenException } from "~/globals/cores/error.core";
import prisma from "~/prisma";

export function checkPermission(model : any , foreignField : string){

    return async (req : Request, res: Response, next : NextFunction) => {
        const {id , role } = req.currentUser
        const entityId = req.params.id 
        
        try {
            const entity = await( prisma[model] as any).findUnique({
                where : {id : entityId},
            });
            
            // console.log("foreignField", entity[foreignField])
        if( role === "ADMIN" || role === "RECRUITER" || id === entity[foreignField]){
            return next()
        }

        return next(new ForbidoenException(`you don't have a permission`))
    } catch (error) {
        next(error)
    }
}
}
// export async function checkPermission(req : Request, res: Response, next : NextFunction){

//     const {id , role } = req.currentUser
//     const candidateId = req.params.id

//     try {
//         const candiateProfile = await prisma.candidateProfile.findUnique({
//             where : {id : candidateId},
//         });

//         if( role === "ADMIN" || role === "RECRUITER" || id === candiateProfile?.id){
//             return next()
//         }

//         return next(new ForbidoenException(`you don't have a permission`))
//     } catch (error) {
//         next(error)
//     }
// }