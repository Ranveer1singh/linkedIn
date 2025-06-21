import prisma from "~/prisma"
import { companyService } from "./company-service"
import { NotFoundException } from "~/globals/cores/error.core"
import { deleteImage } from "~/globals/helpers/upload-helper"

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

    public async readAll(companyId : string, ){
      const list =   await prisma.companyImage.findMany({
            where : {companyId}
        })
        return list 
    }

    private async findCompanyImage(companyId : string, companyImageId :string) {
        const companyImage = await prisma.companyImage.findFirst({
            where : {
                companyId,
                id : companyImageId
            }
        })
        if(!companyImage){
            throw new NotFoundException("company image not found")
        }
        return companyImage
    }

    public async deleteImage(companyId : string, currentUser: UserPayload, companyImageId : string){

        const company = await companyService.findCompany(companyId , currentUser.id);
        const companyImageUrl = (await this.findCompanyImage(companyId, companyImageId)).imageUrl
        await deleteImage(companyImageUrl)
        await prisma.companyImage.delete({
            where : {
                id : companyImageId,
                companyId:company.id
            }
        })
    }
}

export const companyImageService : CompanyImageService = new CompanyImageService()