import express from "express"
import { candidateExperience } from "../controller/candidate-experience";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { allowPermission } from "~/middleware/allowPermission";
import { validateSchema } from "~/middleware/validateSchema";
import { candidateExperienceSchema } from "../schemas/candidate-experience";

const candidateExperienceRoute= express.Router();

candidateExperienceRoute.post("/",asyncWrapper(verifyUSer),
validateSchema(candidateExperienceSchema),
asyncWrapper(candidateExperience.addExperience));
candidateExperienceRoute.get("/me",asyncWrapper(verifyUSer),asyncWrapper(candidateExperience.getMyExperience));
candidateExperienceRoute.get("/",asyncWrapper(verifyUSer),allowPermission("Admin"),asyncWrapper(candidateExperience.getAllExperience));
candidateExperienceRoute.delete("/:id",asyncWrapper(verifyUSer),asyncWrapper(candidateExperience.deleteExperience));
candidateExperienceRoute.patch("/:id",asyncWrapper(verifyUSer),asyncWrapper(candidateExperience.editExperience));

export default candidateExperienceRoute;