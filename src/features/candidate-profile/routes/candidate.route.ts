import express from "express"
import { candidateProfileController } from "../controller/candiate-profile";
import asyncWrapper from "~/globals/cores/asyncWrapper.core";
import { verifyUSer } from "~/middleware/verifyUser";
import { checkPermission } from "~/middleware/checkPermission";
import { allowPermission } from "~/middleware/allowPermission";
import { validateSchema } from "~/middleware/validateSchema";
import { CandidateProfileCreateSchema } from "../schemas/candidateProfile.schema";
const candidateProfileRoute = express.Router();

candidateProfileRoute.post(
    "/",
     asyncWrapper(verifyUSer),
      validateSchema(CandidateProfileCreateSchema),
      asyncWrapper(candidateProfileController.create)
    );
candidateProfileRoute.get(
    "/",
     asyncWrapper(verifyUSer),
      allowPermission("ADMIN"),
       asyncWrapper(candidateProfileController.readAll)
    );

// :id == candiate document id 
candidateProfileRoute.get(
    "/:id",
     asyncWrapper(verifyUSer),
      checkPermission('candidateProfile', 'userId'),
       asyncWrapper(candidateProfileController.readOne)
    );
candidateProfileRoute.patch(
    "/:id",
     asyncWrapper(verifyUSer),
      checkPermission('candidateProfile', 'userId'),
       asyncWrapper(candidateProfileController.update)
    );
candidateProfileRoute.delete(
    "/:id",
     asyncWrapper(verifyUSer),
      checkPermission('candidateProfile', 'userId'),
       asyncWrapper(candidateProfileController.delete)
    );
candidateProfileRoute.patch(
    "/openToWork/:id",
     asyncWrapper(verifyUSer),
      checkPermission('candidateProfile', 'userId'),
       asyncWrapper(candidateProfileController.toggelOpenToWork)
    );

export default candidateProfileRoute;