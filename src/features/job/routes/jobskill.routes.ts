 import express from "express"
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { allowPermission } from "~/middleware/allowPermission";
import { verifyUSer } from "~/middleware/verifyUser";
import { jobController } from "../controller/job-controller";
import { jobSkillController } from "../controller/job-skill.controller";

 const jobSkillRouter = express.Router();
jobSkillRouter.post("/",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(jobSkillController.createJobSkill));
jobSkillRouter.get("/:id",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(jobSkillController.getAll
));
jobSkillRouter.patch("/:id/:skillName",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(jobSkillController.removeJobSkill
))

export default jobSkillRouter