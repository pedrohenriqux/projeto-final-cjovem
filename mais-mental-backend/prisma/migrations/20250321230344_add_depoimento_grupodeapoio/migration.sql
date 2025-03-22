-- CreateTable
CREATE TABLE "Depoimento" (
    "id_depoimento" SERIAL NOT NULL,
    "texto_depoimento" TEXT NOT NULL,
    "data_depoimento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Depoimento_pkey" PRIMARY KEY ("id_depoimento")
);

-- CreateTable
CREATE TABLE "GrupoDeApoio" (
    "id_grupo_apoio" SERIAL NOT NULL,
    "nome_grupo" TEXT NOT NULL,
    "descricao" TEXT,
    "regiao" TEXT NOT NULL,

    CONSTRAINT "GrupoDeApoio_pkey" PRIMARY KEY ("id_grupo_apoio")
);

-- CreateIndex
CREATE UNIQUE INDEX "GrupoDeApoio_nome_grupo_key" ON "GrupoDeApoio"("nome_grupo");
