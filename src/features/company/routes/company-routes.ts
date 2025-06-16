import express from "express"
import { companyController } from "../controller/company-controller";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { allowPermission } from "~/middleware/allowPermission";
import { validateSchema } from "~/middleware/validateSchema";
import { companySchema } from "../schemas/company-schema";

const companyRoute= express.Router();

companyRoute.post("/",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),validateSchema(companySchema),asyncWrapper(companyController.addComapny));

companyRoute.get("/",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),asyncWrapper(companyController.list));

companyRoute.get("/me",asyncWrapper(verifyUSer),asyncWrapper(companyController.myCompany));

companyRoute.get("/:Id",asyncWrapper(verifyUSer),asyncWrapper(companyController.readOne));
companyRoute.patch("/:Id",asyncWrapper(verifyUSer),asyncWrapper(companyController.update));
companyRoute.delete("/:Id",asyncWrapper(verifyUSer),asyncWrapper(companyController.deleteCompany));
companyRoute.patch("/:Id/action",asyncWrapper(verifyUSer),asyncWrapper(companyController.actionONCompany));

export default companyRoute;