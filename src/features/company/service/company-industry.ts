import prisma from "~/prisma";
import { companyService } from "./company-service"
import { BadRequestException, NotFoundException } from "~/globals/cores/error.core";

class CompanyIndustryService {


    /**
     * addIndustry
     */
    public async addIndustry(companyId : string, industryName :string, currentUser : UserPayload) {
      await companyService.findCompany(companyId,currentUser.id);
      await this.findIndustry(industryName);

      const companyIndustry = await prisma.companyIndustry.create({
        data : {
            companyId,
            industryName
        }
      })
      return companyIndustry

    }
    private async findIndustry(industryName : string) {
        const industry = await prisma.industry.findUnique({
            where : {
                name : industryName
            }
        })
        if(!industry) throw new NotFoundException('Industry Not found ')

            return industry
    }

    /**
     * read
     */
    public async read(companyId : string) {
        const companyIndustry = await prisma.companyIndustry.findMany({
            where : {
                companyId
            }
        })
        if(!companyIndustry) throw new NotFoundException('company industry not found')
            return companyIndustry
    }
    /**
     * delete
     */
    public async detele(companyId : string , industryName: string, currentUser : UserPayload) {
       
            await companyService.findCompany(companyId , currentUser.id)
            await this.findCompanyIndustry(companyId, industryName);
    
    
             await prisma.companyIndustry.delete({
                where : {
                    companyId_industryName:{
                        companyId,
                        industryName
                    }
                }
            })
            
                return 'deleted '
      
    }
    private async findCompanyIndustry(companyId : string, industryName: string){
        const companyIndustry = await prisma.companyIndustry.findUnique({
            where : {
                companyId_industryName : {
                    companyId,
                    industryName
                }
            }
        })
        if(!companyIndustry) throw new NotFoundException('not found')

            return companyIndustry
    }
}

export const companyIndustryService = new CompanyIndustryService()