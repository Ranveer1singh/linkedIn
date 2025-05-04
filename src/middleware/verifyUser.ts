import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { BadRequestException } from "~/globals/cores/error.core";

export async function  verifyUSer(req:Request, res:Response, next : NextFunction){
    if(!req.cookies.accessToken){
        throw new BadRequestException("Please login again")
    }
    const token = req.cookies.accessToken;

    const decoded = await jwt.verify(token, process.env.JWT_SECRET!)
    const {name , email , role} = decoded as UserPayload;
    req.currentUser = {name , email , role}
    next()
}