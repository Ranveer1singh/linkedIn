import express from "express"
import { authController } from "../controllers/auth.controller";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";

const authRoute= express.Router();

authRoute.post("/signup",asyncWrapper(authController.signUp));
authRoute.post("/sign-in",asyncWrapper(authController.signIn));
authRoute.get("/me",asyncWrapper(verifyUSer),asyncWrapper(authController.getCurrentUser));
authRoute.post("/logout",asyncWrapper(verifyUSer),asyncWrapper(authController.logOut          ));

export default authRoute;