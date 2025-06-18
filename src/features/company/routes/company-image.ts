import express from "express"
import { companyController } from "../controller/company-controller";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { allowPermission } from "~/middleware/allowPermission";
import { validateSchema } from "~/middleware/validateSchema";
import { companySchema } from "../schemas/company-schema";
import { companyImageController } from "../controller/company-image";
import { uploadCompanyImage } from "~/globals/helpers/upload-helper";

const companyImageRoute= express.Router();

companyImageRoute.post("/",asyncWrapper(verifyUSer),allowPermission("RECRUITER"),uploadCompanyImage.array('images',5),asyncWrapper(companyImageController.add));



export default companyImageRoute;