import { Request, Response } from "express";
import { authService } from "../services/auth";
import HTTP_STATUS from "~/globals/constant/http.constant";

class AuthController {
    public async signUp(req:Request , res : Response){
        const token = await authService.signUp(req.body);
        return res.status(201).json({
            message : "signup sucessfully",
            token
        })
    }

    public async signIn(req:Request , res : Response){
        const token = await authService.signIn(req.body);
        res.status(HTTP_STATUS.OK).json({
            message : "Sign In Successfully",
            token
        })
    }
}

export const authController : AuthController = new AuthController