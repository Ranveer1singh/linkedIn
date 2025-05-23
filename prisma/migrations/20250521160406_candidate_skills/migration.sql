-- CreateTable
CREATE TABLE "CandidateSkill" (
    "candidateProfileId" TEXT NOT NULL,
    "skillName" TEXT NOT NULL,

    CONSTRAINT "CandidateSkill_pkey" PRIMARY KEY ("candidateProfileId","skillName")
);

-- AddForeignKey
ALTER TABLE "CandidateSkill" ADD CONSTRAINT "CandidateSkill_candidateProfileId_fkey" FOREIGN KEY ("candidateProfileId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateSkill" ADD CONSTRAINT "CandidateSkill_skillName_fkey" FOREIGN KEY ("skillName") REFERENCES "skill"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
