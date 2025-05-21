/*
  Warnings:

  - Changed the type of `startYear` on the `CandidateEducation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endYear` on the `CandidateEducation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CandidateEducation" DROP COLUMN "startYear",
ADD COLUMN     "startYear" TIMESTAMP(3) NOT NULL,
DROP COLUMN "endYear",
ADD COLUMN     "endYear" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "skill" (
    "name" TEXT NOT NULL,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("name")
);
