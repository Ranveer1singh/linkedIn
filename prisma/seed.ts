 import { Education, Industry, JobRole, Language, PrismaClient, skill } from "../generated/prisma"
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
async function createRoles() {
    const data : JobRole[]=  [
  { name: "Backend Developer" },
  { name: "Full Stack Developer" },
  { name: "Node.js Developer" },
  { name: "JavaScript Developer" },
  { name: "TypeScript Developer" },
  { name: "API Developer" },
  { name: "Database Developer" },
  { name: "Software Engineer" },
  { name: "Web Developer" },
  { name: "Cloud Developer" },
  { name: "Software Engineer – Backend" },
  { name: "Platform Engineer" },
  { name: "DevOps Engineer" },
  { name: "Solution Architect" },
  { name: "System Design Engineer" },
  { name: "Integration Engineer" },
  { name: "Technical Lead" },
  { name: "Product Engineer" },
  { name: "Project Engineer" },
  { name: "Software Development Engineer (SDE)" },
  { name: "Engineering Manager" },
  { name: "Database Administrator (DBA)" },
  { name: "Data Engineer" },
  { name: "PostgreSQL Developer" },
  { name: "Database Architect" },
  { name: "Prisma ORM Specialist" },
  { name: "API Integration Engineer" },
  { name: "RESTful Services Developer" },
  { name: "Microservices Developer" },
  { name: "Authentication & Security Engineer" }
];

    await prisma.jobRole.createMany({
        data
    })
}




//  main()
//  .then()
//  .catch((err) => console.log(err))
 createRoles()
 .then()
 .catch((err) => console.log(err))
