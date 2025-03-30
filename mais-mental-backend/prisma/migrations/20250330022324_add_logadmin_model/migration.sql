-- CreateTable
CREATE TABLE "LogAdmin" (
    "id_log" SERIAL NOT NULL,
    "acao" TEXT NOT NULL,
    "detalhes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "LogAdmin_pkey" PRIMARY KEY ("id_log")
);

-- AddForeignKey
ALTER TABLE "LogAdmin" ADD CONSTRAINT "LogAdmin_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
