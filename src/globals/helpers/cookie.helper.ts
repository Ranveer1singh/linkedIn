import { Response } from "express";

export function sendTokenToCookie(res : Response, token : string){
    res.cookie("accessToken", token, {
        maxAge: 1000 * 60 * 60,
        httpOnly : true,
        secure : false 
    })
}