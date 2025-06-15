import { Prisma } from "generated/prisma"
import { string } from "joi"
import prisma from "~/prisma"

export async function getPaginationAndFilter({
    page , limit ,filter , filterField, entity} : any 
){
    let skip = (page-1) * limit
    const condition = filterField.map((field : string)=> {
        return {
            [field] : {contains :filter , mode : 'insensitive'}
        }
    })
     const where = filter ?( {
             OR  :condition
        }) as Prisma.CompanyWhereInput: undefined
        if(filter){
            page=1;
            skip = (page - 1) *limit
        }
        const [list,totalCount] = await Promise.all([(prisma[entity] as any).findMany({
            where,
            skip,
            take : limit
        }),

       (prisma[entity] as any).count({
        where
       })])
       return {list , totalCount}
}