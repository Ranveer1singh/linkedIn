import express from "express"
import { candidateProfileController } from "../controller/candiate-profile";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
const candidateProfileRoute= express.Router();

candidateProfileRoute.post("/",asyncWrapper(verifyUSer),asyncWrapper(candidateProfileController.create));

export default candidateProfileRoute;