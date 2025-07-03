import { companyService } from "~/features/company/service/company-service";
import prisma from "~/prisma";

class JobService {

    /**
     * create
     */
    public async create(reqBody: any, currentUser: UserPayload) {
        const {
            companyId,
            jobRoleName,
            postById,
            title,
            description,
            minSalary,
            maxSalary
        } = reqBody;

        const company = companyService.findCompany(companyId , currentUser.id)
        const job = await prisma.jOb.create({
        data : {
            companyId,
            jobRoleName,
            postById : currentUser.id,
            title,
            description,
            minSalary,
            maxSalary
        } 
    })
    return job
    }

    

}
export const jobService = new JobService()