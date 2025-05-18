-- CreateEnum
CREATE TYPE "DEGREE" AS ENUM ('BACHELORS', 'MASTER', 'ENGINEER');

-- CreateTable
CREATE TABLE "CandidateEducation" (
    "candidateProfileId" TEXT NOT NULL,
    "educationId" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "degree" "DEGREE" NOT NULL DEFAULT 'BACHELORS',
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,

    CONSTRAINT "CandidateEducation_pkey" PRIMARY KEY ("candidateProfileId","educationId")
);

-- AddForeignKey
ALTER TABLE "CandidateEducation" ADD CONSTRAINT "CandidateEducation_candidateProfileId_fkey" FOREIGN KEY ("candidateProfileId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateEducation" ADD CONSTRAINT "CandidateEducation_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
