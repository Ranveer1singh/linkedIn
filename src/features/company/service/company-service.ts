import prisma from "~/prisma";
import { ICompany } from "../interface/company";
import { InternalServerException, NotFoundException } from "~/globals/cores/error.core";
import { date } from "joi";
import { Company, Prisma } from "generated/prisma";
import { getPaginationAndFilter } from "~/globals/helpers/paginatio-filter";
import { error } from "console";

class CompanyService {
    /**
     * create
     */
    public async create(body: ICompany, currentUser: UserPayload) {
        const { name, description, mapLink, address, establishedDate, teamSize, websiteUrl } = body
        const company = await prisma.company.create({
            data: { name, description, mapLink, address, establishedDate: new Date(establishedDate), teamSize, websiteUrl, userId: currentUser.id }
        })
        return company
    }

    /**
     * readAll
     */
    public async readAll({ page, limit, filter }: { page: number, limit: number, filter: string }) {

        const { list, totalCount } = await getPaginationAndFilter({ page, limit, filter, filterField: ['name', 'description'], entity: 'company' })
        return { list, totalCount }

    }
    /**
     * read for admin 
     */
    public readforadmin () {
        // todo
    }
    /**
     * read my company
     */
    public async readMy(currentUser: UserPayload) {
        const list = await prisma.company.findMany({
            where: {
                userId: currentUser.id
            }
        })
        return list

    }
    /**
     * read one company
     */
    public async readOne(Id: string) {
        const list = await prisma.company.findUnique
            ({
                where: {
                    id: Id
                }
            })
        return list

    }


    public async findCompany(companyId: string, userId: string): Promise<Company> {
        const company = await prisma.company.findFirst({
            where: {
                id: companyId,
                userId
            }
        })
        if (!company) throw new NotFoundException('Company not found')
        return company
    }

    public async updateCompany(id: string, body: any, currentUser: UserPayload) {
        const { name,
            description,
            teamSize,
            establishedDate,
            websiteUrl,
            mapLink,
            address } = body
        await this.findCompany(id, currentUser.id)
        await prisma.company.update({
            where: {
                id: id,
                userId: currentUser.id
            },
            data: {
                name,
                description,
                teamSize,
                establishedDate: establishedDate ? new Date(establishedDate) : undefined,
                websiteUrl,
                mapLink,
                address
            }
        })
    }
    /**
     * approved or rejected
     */
    public async action(id : string, isApproved : boolean){
        try {
            await this.readOne(id)
            const updated = await prisma.company.update(
                {
                    where : {id},
                    data: {isApproved}
                }
            )
            return updated
        } catch (error) {
            console.log(error)
            throw new Error (`internal server error`)
        }
    }
 /**
     * reject
     */

    public async delete(id : string){
        try {
            await this.readOne(id)
            const updated = await prisma.company.delete(
                {
                    where : {id},
                }
            )
            return 
        } catch (error) {
            console.log(error)
            throw new Error (`internal server error`)
        }
    }
    
}

export const companyService: CompanyService = new CompanyService()