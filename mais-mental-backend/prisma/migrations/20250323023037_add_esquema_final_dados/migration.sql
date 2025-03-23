/*
  Warnings:

  - You are about to alter the column `regiao` on the `GrupoDeApoio` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(2)`.

*/
-- CreateEnum
CREATE TYPE "StatusAtendimento" AS ENUM ('AGENDADO', 'REALIZADO', 'CANCELADO');

-- AlterTable
ALTER TABLE "GrupoDeApoio" ALTER COLUMN "regiao" SET DATA TYPE CHAR(2);

-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "email_user" TEXT NOT NULL,
    "senha_user" TEXT NOT NULL,
    "type_user" "TypeUser" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id_paciente" SERIAL NOT NULL,
    "nome_paciente" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "idade" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "genero" "Genero" NOT NULL,
    "ocupacao" TEXT,
    "principal_queixa" TEXT NOT NULL,
    "historico_familiar" TEXT NOT NULL,
    "uso_medicamentos" TEXT NOT NULL,
    "objetivo_terapia" TEXT NOT NULL,
    "responsavel" TEXT,
    "telefone_responsavel" TEXT,
    "foto_paciente" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id_paciente")
);

-- CreateTable
CREATE TABLE "Profissional" (
    "id_profissional" SERIAL NOT NULL,
    "nome_profissional" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "idade" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "genero" "Genero" NOT NULL,
    "matricula_profissional" TEXT NOT NULL,
    "especializacao" "EspecialidadeProfissional" NOT NULL,
    "descricao" TEXT,
    "faixa_etaria_atendimento" "FaixaEtariaAtendimento" NOT NULL,
    "quantd_atendimentos_gratis" INTEGER NOT NULL,
    "foto_profissional" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id_profissional")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id_endereco" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" CHAR(2) NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero_residencia" TEXT,
    "paciente_id" INTEGER,
    "profissional_id" INTEGER,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id_endereco")
);

-- CreateTable
CREATE TABLE "Telefone" (
    "id_telefone" SERIAL NOT NULL,
    "numero_telefone" TEXT NOT NULL,
    "paciente_id" INTEGER,
    "profissional_id" INTEGER,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("id_telefone")
);

-- CreateTable
CREATE TABLE "Atendimento" (
    "id_atendimento" SERIAL NOT NULL,
    "data_atendimento" TIMESTAMP(3) NOT NULL,
    "sintomas" TEXT,
    "relato_atendimento" TEXT,
    "status" "StatusAtendimento" NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "profissional_id" INTEGER NOT NULL,

    CONSTRAINT "Atendimento_pkey" PRIMARY KEY ("id_atendimento")
);

-- CreateTable
CREATE TABLE "EvolucaoClinica" (
    "id_evolucao" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "mudancas_perfil" TEXT,
    "medicacao" TEXT,
    "recomendacoes" TEXT,
    "atendimento_id" INTEGER NOT NULL,

    CONSTRAINT "EvolucaoClinica_pkey" PRIMARY KEY ("id_evolucao")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_user_key" ON "User"("email_user");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_cpf_key" ON "Paciente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_user_id_key" ON "Paciente"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_cpf_key" ON "Profissional"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_matricula_profissional_key" ON "Profissional"("matricula_profissional");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_user_id_key" ON "Profissional"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "EvolucaoClinica_atendimento_id_key" ON "EvolucaoClinica"("atendimento_id");

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profissional" ADD CONSTRAINT "Profissional_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id_paciente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id_profissional") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id_paciente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id_profissional") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimento" ADD CONSTRAINT "Atendimento_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimento" ADD CONSTRAINT "Atendimento_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id_profissional") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvolucaoClinica" ADD CONSTRAINT "EvolucaoClinica_atendimento_id_fkey" FOREIGN KEY ("atendimento_id") REFERENCES "Atendimento"("id_atendimento") ON DELETE RESTRICT ON UPDATE CASCADE;
