import { Application } from "express";
import userRoute from "~/features/user/rotues/user.rotue";
import asyncWrapper from "../cores/asyncWrapper.core";

function appRoutes(app : Application) {
    app.use('/api/v1/user',asyncWrapper(userRoute))
}
export default appRoutes; 