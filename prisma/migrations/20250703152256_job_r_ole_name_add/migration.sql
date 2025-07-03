/*
  Warnings:

  - Added the required column `jobRoleName` to the `JOb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JOb" ADD COLUMN     "jobRoleName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "JOb" ADD CONSTRAINT "JOb_jobRoleName_fkey" FOREIGN KEY ("jobRoleName") REFERENCES "JobRole"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
