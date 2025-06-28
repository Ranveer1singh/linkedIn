 import { Education, Industry, Language, PrismaClient, skill } from "../generated/prisma"
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
async function createSkills() {
    const data : skill[]= [
        {name  : "Java"},
        {name  : "Python"},
        {name  : "c++"},
        {name  : "React"},
        {name  : "Node"},
        {name  : "C#"},
        {name  : "GoLang"},
        {name  : "Rust"}
    ]

    await prisma.skill.createMany({
        data
    })
}
async function createIndustries() {
    const data : Industry[]= [
  { "name": "Information Technology" },
  { "name": "Healthcare & Pharmaceuticals" },
  { "name": "Finance & Banking" },
  { "name": "Automobile Industry" },
  { "name": "Telecommunications" },
  { "name": "Retail & E-commerce" },
  { "name": "Energy & Utilities" },
  { "name": "Real Estate & Construction" },
  { "name": "Media & Entertainment" },
  { "name": "Aerospace & Defense" }
]

    await prisma.industry.createMany({
        data
    })
}




//  main()
//  .then()
//  .catch((err) => console.log(err))
 createIndustries()
 .then()
 .catch((err) => console.log(err))
