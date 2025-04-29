import { Request, Response } from "express";
import { authService } from "../services/auth";

class AuthController {
    public async signUp(req:Request , res : Response){
        const token = await authService.signUp(req.body);
        return res.status(201).json({
            message : "signup sucessfully",
            token
        })
    }
}

export const authController : AuthController = new AuthController