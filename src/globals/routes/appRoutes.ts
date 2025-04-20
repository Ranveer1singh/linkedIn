import { Application } from "express";
import userRoute from "~/features/user/rotues/user.rotue";

function appRoutes(app : Application) {
    app.use('/api/v1/user',userRoute)
}
export default appRoutes; 