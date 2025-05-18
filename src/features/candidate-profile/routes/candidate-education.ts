import express from "express"
import { candidateEducation } from "../controller/candidate-education";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { allowPermission } from "~/middleware/allowPermission";

const candidateEducationRoute= express.Router();

candidateEducationRoute.post("/",asyncWrapper(verifyUSer),asyncWrapper(candidateEducation.addEducation));
candidateEducationRoute.get("/",asyncWrapper(verifyUSer),allowPermission('Admin'),asyncWrapper(candidateEducation.readAll));
candidateEducationRoute.get("/me",asyncWrapper(verifyUSer),asyncWrapper(candidateEducation.readMyEducation));
candidateEducationRoute.patch("/:educationId",asyncWrapper(verifyUSer),asyncWrapper(candidateEducation.udpateEducation));

export default candidateEducationRoute;