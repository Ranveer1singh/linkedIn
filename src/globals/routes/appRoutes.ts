import { Application } from "express";
import userRoute from "~/features/user/rotues/user.rotue";
import authRoute from "~/features/user/rotues/auth.route";
import candidateProfileRoute from "~/features/candidate-profile/routes/candidate.route";
import candidateLanguageRoute from "~/features/candidate-profile/routes/candidate-language.route";

function appRoutes(app : Application) {
    app.use('/api/v1/user',userRoute)
    app.use('/api/v1/auth',authRoute)
    app.use('/api/v1/candidate-profile',candidateProfileRoute)
    app.use('/api/v1/candidate-language',candidateLanguageRoute)
}
export default appRoutes; 