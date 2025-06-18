import { Application } from "express";
import userRoute from "~/features/user/rotues/user.rotue";
import authRoute from "~/features/user/rotues/auth.route";
import candidateProfileRoute from "~/features/candidate-profile/routes/candidate.route";
import candidateLanguageRoute from "~/features/candidate-profile/routes/candidate-language.route";
import candidateEducationRoute from "~/features/candidate-profile/routes/candidate-education";
import candidateSkillRoute from "~/features/candidate-profile/routes/candidate-skill";
import candidateExperienceRoute from "~/features/candidate-profile/routes/candidate-experience";
import companyRoute from "~/features/company/routes/company-routes";
import companyImageRoute from "~/features/company/routes/company-image";

function appRoutes(app : Application) {
    app.use('/api/v1/user',userRoute)
    app.use('/api/v1/auth',authRoute)
    app.use('/api/v1/candidate-profile',candidateProfileRoute)
    app.use('/api/v1/candidate-language',candidateLanguageRoute)
    app.use('/api/v1/candidate-education',candidateEducationRoute)
    app.use('/api/v1/candidate-skill',candidateSkillRoute)
    app.use('/api/v1/candidate-experience',candidateExperienceRoute)
    app.use('/api/v1/company',companyRoute)
    app.use('/api/v1/company-image',companyImageRoute)
}
export default appRoutes; 