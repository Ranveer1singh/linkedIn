import { companyService } from "~/features/company/service/company-service";
import { NotFoundException } from "~/globals/cores/error.core";
import { getPaginationAndFilter } from "~/globals/helpers/paginatio-filter";
import prisma from "~/prisma";
import { jobService } from "./job-service";

class JobSkillService {

     async createJobSkill(body : any, currentUser : UserPayload) {
       try {
         const {jobId, skillName} = body
         await jobService.findByJobId(jobId, currentUser.id)
       const jobSkill = await prisma.jobSkill.create({
         data: {
           jobId,
           skillName,
         },
       });
       return jobSkill;
       } catch (error) {
        console.log(error);
        throw new Error("error")
       }

  }

  async getSkillsByJob(jobId: string) {
    try {
      const skills = await prisma.jobSkill.findMany({
        where: { jobId },
        // include: { skill: true },
      });
      return skills;
    } catch (error) {
      throw new Error(`Failed to fetch job skills: ${error}`);
    }
  }
async removeJobSkill(jobId: string, skillName: string) {
    try {
      const deleted = await prisma.jobSkill.delete({
        where: {
          jobId_skillName: {
            jobId,
            skillName,
          },
        },
      });
      return deleted;
    } catch (error) {
      throw new Error(`Failed to delete job skill: ${error}`);
    }
  }
}
export const jobSkillService = new JobSkillService()