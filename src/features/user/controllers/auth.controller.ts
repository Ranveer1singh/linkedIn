import { Request, Response } from "express";
import { authService } from "../services/auth";
import HTTP_STATUS from "~/globals/constant/http.constant";
import { sendTokenToCookie } from "~/globals/helpers/cookie.helper";

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
       sendTokenToCookie(res, token)
        res.status(HTTP_STATUS.OK).json({
            message : "Sign In Successfully",
        })
    }

    public async getCurrentUser(req: Request, res : Response){
        return res.status(HTTP_STATUS.OK).json({
            message : 'get current user successfully',
            data : res.currentUser
        })
    }

    public async logOut(req:Request,res:Response){
        res.clearCookie("accessToken")
        res.status(HTTP_STATUS.OK).json({
            message : "Logout Successfully"
        })
    }
}

export const authController : AuthController = new AuthController