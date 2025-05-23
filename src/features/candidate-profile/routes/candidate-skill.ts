import express from "express"
import { candidateSkillController } from "../controller/candidate-skills";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { allowPermission } from "~/middleware/allowPermission";

const candidateSkillRoute= express.Router();

candidateSkillRoute.post("/",asyncWrapper(verifyUSer), asyncWrapper(candidateSkillController.addSkill));
candidateSkillRoute.get("/",asyncWrapper(verifyUSer),allowPermission("Admin"), asyncWrapper(candidateSkillController.findSkill));
candidateSkillRoute.get("/me",asyncWrapper(verifyUSer), asyncWrapper(candidateSkillController.mySkill));
candidateSkillRoute.delete("/:skillName",asyncWrapper(verifyUSer), asyncWrapper(candidateSkillController.deleteSkill));

export default candidateSkillRoute;