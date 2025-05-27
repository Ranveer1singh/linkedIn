/*
  Warnings:

  - You are about to drop the column `deapartment` on the `CandidateExperience` table. All the data in the column will be lost.
  - Added the required column `department` to the `CandidateExperience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CandidateExperience" DROP COLUMN "deapartment",
ADD COLUMN     "department" TEXT NOT NULL;
