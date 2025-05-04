import { NextFunction, Request, Response } from "express";
import { ForbidoenException } from "~/globals/cores/error.core";

export function allowPermission(...roles : string[]){
    return (req : Request, res:Response , next : NextFunction)=>{
        if(!roles.includes(req.currentUser.role)){
            return next(new ForbidoenException(`You Don't Have Permission to access`))
        }
        return next()
    }
}