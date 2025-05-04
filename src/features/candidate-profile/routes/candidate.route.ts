import express from "express"
import { candidateProfileController } from "../controller/candiate-profile";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { checkPermission } from "~/middleware/checkPermission";
const candidateProfileRoute= express.Router();

candidateProfileRoute.post("/",asyncWrapper(verifyUSer),asyncWrapper(candidateProfileController.create));
candidateProfileRoute.get("/",asyncWrapper(verifyUSer),asyncWrapper(candidateProfileController.readAll));
candidateProfileRoute.get("/:id",asyncWrapper(verifyUSer),checkPermission ,asyncWrapper(candidateProfileController.readOne));
candidateProfileRoute.patch("/:id",asyncWrapper(verifyUSer),checkPermission,asyncWrapper(candidateProfileController.update));
candidateProfileRoute.delete("/:id",asyncWrapper(verifyUSer),checkPermission,asyncWrapper(candidateProfileController.delete));

export default candidateProfileRoute;