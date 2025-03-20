const prisma = require('../prisma');

const listarGrupos = async () => {
    return await prisma.GrupoDeApoio.findMany();
};

const listarGrupoPorId = async (id_grupo_apoio) => {
    return await prisma.GrupoDeApoio.findUnique({
        where: { id_grupo_apoio },
    });
};

const criarGrupo = async ({ nome_grupo, descricao, regiao }) => {
    return await prisma.GrupoDeApoio.create({
        data: {
            nome_grupo,
            descricao,
            regiao,
        }
    });
};

const atualizarGrupo = async (id_grupo_apoio, { nome_grupo, descricao, regiao }) => {
    const grupo = await prisma.GrupoDeApoio.findUnique({
        where: { id_grupo_apoio },
    });

    if (!grupo) {
        throw new Error("Grupo de Apoio não encontrado.");
    }

    return await prisma.GrupoDeApoio.update({
        where: { id_grupo_apoio },
        data: {
            nome_grupo,
            descricao,
            regiao,
        },
    });
};

const excluirGrupo = async (id_grupo_apoio) => {
    return await prisma.GrupoDeApoio.delete({
        where: { id_grupo_apoio },
    });
};

module.exports = {
    listarGrupos,
    listarGrupoPorId,
    criarGrupo,
    atualizarGrupo,
    excluirGrupo
};