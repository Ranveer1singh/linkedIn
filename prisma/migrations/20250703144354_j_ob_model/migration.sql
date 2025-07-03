-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('PENDING', 'ACTIVE', 'EXPIRED');

-- CreateTable
CREATE TABLE "JOb" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "postById" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "minSalary" DOUBLE PRECISION NOT NULL,
    "maxSalary" DOUBLE PRECISION NOT NULL,
    "totalViews" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "JOb_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JOb" ADD CONSTRAINT "JOb_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JOb" ADD CONSTRAINT "JOb_postById_fkey" FOREIGN KEY ("postById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
