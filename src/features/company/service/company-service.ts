import prisma from "~/prisma";
import { ICompany } from "../interface/company";
import { InternalServerException } from "~/globals/cores/error.core";
import { date } from "joi";
import { Prisma } from "generated/prisma";
import { getPaginationAndFilter } from "~/globals/helpers/paginatio-filter";

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

       /**
        * readAll
        */
       public async readAll({page , limit, filter} : { page :number, limit : number, filter : string} ) {

       const {list , totalCount} = await getPaginationAndFilter({page, limit,filter , filterField : ['name', 'description'], entity : 'company'} )
        return {list, totalCount}
        
       }
       /**
        * read my company
        */
       public async readMy(currentUser : UserPayload) {
        const list = await prisma.company.findMany({
            where : {
                userId : currentUser.id
            }
        })
        return list
        
       }
       /**
        * read one company
        */
       public async readOne(Id : string) {
        const list = await prisma.company.findUnique
        ({
            where : {
                id : Id
            }
        })
        return list
        
       }
}

export const  companyService : CompanyService = new CompanyService()