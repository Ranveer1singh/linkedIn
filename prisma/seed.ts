 import { Language, PrismaClient } from "../generated/prisma"
 const prisma = new PrismaClient()

 async function main(){
    const data : Language[] = [
        {name : 'english'},
        {name : "japnese"},
        {name : "chinese"},
    ]
    await prisma.language.createMany({
        data 
    })
 }

 main()
 .then()
 .catch((err) => console.log(err))