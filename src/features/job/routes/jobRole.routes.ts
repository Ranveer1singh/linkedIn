import express from "express"
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { allowPermission } from "~/middleware/allowPermission";
import { jobRoleController } from "../controller/job-role.controller";

const jobRoleRoute= express.Router();

jobRoleRoute.post("/",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(jobRoleController.addRole));
jobRoleRoute.get("/",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(jobRoleController.getRole));
jobRoleRoute.delete("/:name",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(jobRoleController.deleteRole));
jobRoleRoute.patch("/:Rolename",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(jobRoleController.updateRole));


export default jobRoleRoute;