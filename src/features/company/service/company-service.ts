import prisma from "~/prisma";
import { ICompany } from "../interface/company";
import { InternalServerException } from "~/globals/cores/error.core";
import { date } from "joi";

class CompanyService {
    /**
     * create
     */
    public async create(body : ICompany, currentUser : UserPayload) {
         const {name, description, mapLink, address, establishedDate, teamSize, websiteUrl} = body
         const company = await prisma.company.create({
             data : {name, description, mapLink, address, establishedDate : new Date(establishedDate) , teamSize, websiteUrl, userId : currentUser.id}
         })
         return company
       } 
}

export const  companyService : CompanyService = new CompanyService()