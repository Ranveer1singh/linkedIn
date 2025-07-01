import prisma from "~/prisma";

class JobRoleService {
    /**
     * add job role
     */
    public async addRole(name : string) {
       const role = await prisma.jobRole.create({
        data : {
            name
        }
       })
       return role
    }
    /**
     * get all  job role
     */
    public async getAllRole() {
       const role = await prisma.jobRole.findMany()
       return role
    }
    /**
     * delete job role
     */
    public async deleteRole(name : string) {
       const role = await prisma.jobRole.delete({
        where : {
            name
        }
       })
       return role
    }
    /**
     * update job role
     */
    public async updateRole(name : string, body : any) {
       const role = await prisma.jobRole.update({
        where : {
            name
        },
        data : {
            name : body.name
        }
       })
       return role
    }
}

export const jobRoleService = new JobRoleService