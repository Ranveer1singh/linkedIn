 import express from "express"
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { allowPermission } from "~/middleware/allowPermission";
import { verifyUSer } from "~/middleware/verifyUser";
import { jobController } from "../controller/job-controller";

 const jobRouter = express.Router();
jobRouter.post("/",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(jobController.createJob));