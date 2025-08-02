import { companyService } from "~/features/company/service/company-service";
import { NotFoundException } from "~/globals/cores/error.core";
import { getPaginationAndFilter } from "~/globals/helpers/paginatio-filter";
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

    /**
     * read all
     */
    public async readAll({page , limit, filter, minSalary} : any) {

         const {list , totalCount} = await getPaginationAndFilter({
             page,
             limit,
             filter,
             filterField :['title','description'],
             entity : 'jOb',
 
         })
         return {job : list, totalCount}
       
    }
    /**
     * read singe
     */
    public async readOne(id : string) {
      const job = await prisma.jOb.findUnique({
        where : {id},
        include : {
            company : true,
            postBy : true
        }
      })
      if(!job) throw new NotFoundException("Job not found");
      const result =  {
    id: job.id,
    title: job.title,
    description: job.description,
    companyName: job.company.name,
    postByName: job.postBy.name,
    // Add other job fields if needed
  };
      return result
    }
    
    public async updateJob(id : string, companyId : string ,body : any, currentUser : UserPayload){
      
         await this.findOne(companyId, currentUser.id)
 
         const updatejob = await prisma.jOb.update({
             where : {id, postById : currentUser.id},
             data : body
         })
         return updatejob
       
        
    }
    public async updateJobStatus(id : string, companyId : string ,status : any, currentUser : UserPayload){
       try {
         await this.findOne(companyId, currentUser.id)
 
         const updatejob = await prisma.jOb.update({
             where : {id, postById : currentUser.id},
             data : {status}
         })
         return updatejob
       } catch (error) {
        console.log(error)
        throw new Error("error")
       }
        
    }
    
public async findOne(companyId : string , userId : string){
    const job = await prisma.jOb.findFirst({
        where : {
            companyId,
            postById : userId
        }
    })
    if(!job) throw new NotFoundException('job not found')
        return job
}
}
export const jobService = new JobService()