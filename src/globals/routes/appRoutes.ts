import { Application } from "express";
import userRoute from "~/features/user/rotues/user.rotue";
import authRoute from "~/features/user/rotues/auth.route";

function appRoutes(app : Application) {
    app.use('/api/v1/user',userRoute)
    app.use('/api/v1/auth',authRoute)
}
export default appRoutes; 