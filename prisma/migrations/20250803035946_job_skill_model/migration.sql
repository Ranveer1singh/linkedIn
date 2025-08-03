-- CreateTable
CREATE TABLE "jobSkill" (
    "jobId" TEXT NOT NULL,
    "skillName" TEXT NOT NULL,

    CONSTRAINT "jobSkill_pkey" PRIMARY KEY ("jobId","skillName")
);

-- AddForeignKey
ALTER TABLE "jobSkill" ADD CONSTRAINT "jobSkill_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JOb"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobSkill" ADD CONSTRAINT "jobSkill_skillName_fkey" FOREIGN KEY ("skillName") REFERENCES "skill"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
