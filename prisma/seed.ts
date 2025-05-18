 import { Education, Language, PrismaClient } from "../generated/prisma"
 const prisma = new PrismaClient()

//  async function main(){
//     const data : Language[] = [
//         {name : 'english'},
//         {name : "japnese"},
//         {name : "chinese"},
//     ]
//     await prisma.language.createMany({
//         data 
//     })

//  }
async function createEducationData() {
        const data = [
            {
                name : "LNCT University",
                map : "https://g.co/kgs/HckZFSV"
            },
            {
                name : "Oreintal College of Technology",
                map : "https://g.co/kgs/7Rxw1rD"
            },
            {
                name : "Sage University",
                map : "https://maps.app.goo.gl/SqjnnqQEktbqf72R8"
            }
        ]

        await prisma.education.createMany({
            data
        })
    }

//  main()
//  .then()
//  .catch((err) => console.log(err))
 createEducationData()
 .then()
 .catch((err) => console.log(err))
