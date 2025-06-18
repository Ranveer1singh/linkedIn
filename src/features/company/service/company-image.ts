import prisma from "~/prisma"
import { companyService } from "./company-service"

class CompanyImageService {

    public async addImage(companyId : string , currentUser : UserPayload , files : Express.Multer.File[]){
        const company = await companyService.findCompany(companyId, currentUser.id)
        const data  =[]
        for(const file of files){
            data.push({companyId : company.id, imageUrl : file.filename})
        }

        await prisma.companyImage.createMany({
            data : data
        })
    }
}

export const companyImageService : CompanyImageService = new CompanyImageService()