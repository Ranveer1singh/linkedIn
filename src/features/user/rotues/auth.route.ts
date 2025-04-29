import express from "express"
import { authController } from "../controllers/auth.controller";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";

const authRoute= express.Router();

authRoute.post("/signup",asyncWrapper(authController.signUp));

export default authRoute;