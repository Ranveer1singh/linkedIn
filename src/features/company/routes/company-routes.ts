import express from "express"
import { companyController } from "../controller/company-controller";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { allowPermission } from "~/middleware/allowPermission";
import { validateSchema } from "~/middleware/validateSchema";
import { companySchema } from "../schemas/company-schema";

const companyRoute= express.Router();

companyRoute.post("/",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),validateSchema(companySchema),asyncWrapper(companyController.addComapny));

export default companyRoute;