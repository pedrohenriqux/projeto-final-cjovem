const prisma = require('../prisma');

const listarDepoimentos = async () => {
    return await prisma.Depoimento.findMany();
};

const listarDepoimentosPorId = async (id_depoimento) => {
    return await prisma.Depoimento.findUnique({
        where: { id_depoimento },
    });
};

const criarDepoimentos = async ({ texto_depoimento }) => {
    return await prisma.Depoimento.create({
        data: {
            texto_depoimento,
        }
    });
};

const atualizarDepoimento = async (id_depoimento, { texto_depoimento }) => {
    const depoimento = await prisma.Depoimento.findUnique({
        where: { id_depoimento },
    });

    if (!depoimento) {
        throw new Error("Depoimento não encontrado.");
    }

    return await prisma.Depoimento.update({
        where: { id_depoimento },
        data: {
            texto_depoimento,
        },
    });
};

const excluirDepoimento = async (id_depoimento) => {
    return await prisma.Depoimento.delete({
        where: { id_depoimento },
    });
};

module.exports = {
    listarDepoimentos,
    listarDepoimentosPorId,
    criarDepoimentos,
    atualizarDepoimento,
    excluirDepoimento
};