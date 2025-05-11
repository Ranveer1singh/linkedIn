import express from "express"
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { candidateLanguageController } from "../controller/candidate-language";
import { validateSchema } from "~/middleware/validateSchema";
import { CandidateLanguageCreateSchema } from "../schemas/candidateLanguage";

const candidateLanguageRoute= express.Router();

candidateLanguageRoute.post("/",asyncWrapper(verifyUSer),validateSchema(CandidateLanguageCreateSchema),asyncWrapper(candidateLanguageController.create));
candidateLanguageRoute.get("/",asyncWrapper(verifyUSer),asyncWrapper(candidateLanguageController.readAll));
candidateLanguageRoute.get("/my-language",asyncWrapper(verifyUSer),asyncWrapper(candidateLanguageController.readMyLanguage));
candidateLanguageRoute.patch("/:languageName",asyncWrapper(verifyUSer),asyncWrapper(candidateLanguageController.updateLanguageLevel));
candidateLanguageRoute.delete("/:languageName",asyncWrapper(verifyUSer),asyncWrapper(candidateLanguageController.removeCandidateLanguage));

export default candidateLanguageRoute;