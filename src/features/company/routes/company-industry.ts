import express from "express"
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { allowPermission } from "~/middleware/allowPermission";
import { validateSchema } from "~/middleware/validateSchema";
import { companyIndustryController } from "../controller/compnay-industry";
import { companyIndustrySchema } from "../schemas/company-industry";

const companyIndustryRoute= express.Router();

companyIndustryRoute.post("/:companyId",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),validateSchema(companyIndustrySchema),asyncWrapper(companyIndustryController.addIndustry));
companyIndustryRoute.get("/:companyId",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(companyIndustryController.list));
companyIndustryRoute.delete("/:companyId",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(companyIndustryController.remove));


export default companyIndustryRoute;