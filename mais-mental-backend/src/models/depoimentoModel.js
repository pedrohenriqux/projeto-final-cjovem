const prisma = require('../prisma');

const listarDepoimentos = async () => {
    return await prisma.depoimento.findMany();
};

const listarDepoimentosPorId = async (id) => {
    const depoimento = await prisma.depoimento.findUnique({
        where: { id },
    });

    if (!depoimento) {
        throw new Error("Depoimento não encontrado.");
    }

    return depoimento;
};

const criarDepoimentos = async ({ texto_depoimento, data_depoimento }) => {
    return await prisma.depoimento.create({
        data: {
            texto_depoimento,
            data_depoimento
        }
    });
};

const atualizarDepoimento = async (id, { texto_depoimento, data_depoimento }) => {
    const depoimento = await prisma.depoimento.findUnique({
        where: { id },
    });

    if (!depoimento) {
        throw new Error("Depoimento não encontrado.");
    }

    return await prisma.depoimento.update({
        where: { id },
        data: {
            texto_depoimento,
            data_depoimento
        },
    });
};

const excluirDepoimento = async (id) => {
    const depoimento = await prisma.depoimento.findUnique({
        where: { id },
    });

    if (!depoimento) {
        throw new Error("Depoimento não encontrado.");
    }

    await prisma.depoimento.delete({
        where: { id },
    });
};

module.exports = {
    listarDepoimentos,
    listarDepoimentosPorId,
    criarDepoimentos,
    atualizarDepoimento,
    excluirDepoimento
};