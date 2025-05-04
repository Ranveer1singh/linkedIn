import express from "express"
import { candidateProfileController } from "../controller/candiate-profile";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { checkPermission } from "~/middleware/checkPermission";
import { allowPermission } from "~/middleware/allowPermission";
const candidateProfileRoute = express.Router();

candidateProfileRoute.post("/", asyncWrapper(verifyUSer), asyncWrapper(candidateProfileController.create));
candidateProfileRoute.get("/", asyncWrapper(verifyUSer), allowPermission("ADMIN"), asyncWrapper(candidateProfileController.readAll));
candidateProfileRoute.get("/:id", asyncWrapper(verifyUSer), checkPermission('candidateProfile', 'userId'), asyncWrapper(candidateProfileController.readOne));
candidateProfileRoute.patch("/:id", asyncWrapper(verifyUSer), checkPermission('candidateProfile', 'userId'), asyncWrapper(candidateProfileController.update));
candidateProfileRoute.delete("/:id", asyncWrapper(verifyUSer), checkPermission('candidateProfile', 'userId'), asyncWrapper(candidateProfileController.delete));

export default candidateProfileRoute;