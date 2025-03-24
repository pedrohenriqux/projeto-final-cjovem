const prisma = require('../prisma');

const listarEvolucoes = async () => {
    return await prisma.EvolucaoClinica.findMany({
        include: {
            atendimento: {
                include: {
                    paciente: true,
                    profissional: true,
                }
            }
        }
    });
};

const listarEvolucaoPorId = async (id_evolucao) => {
    return await prisma.EvolucaoClinica.findUnique({
        where: { id_evolucao },
        include: {
            atendimento: {
                include: {
                    paciente: true,
                    profissional: true,
                }
            }
        }
    });
};

const criarEvolucao = async ({
    data,
    mudancas_perfil,
    medicacao,
    recomendacoes,
    atendimento_id,
}) => {

    const atendimento = await prisma.Atendimento.findUnique({
        where: { id_atendimento: atendimento_id },
        include: { evolucao: true }
    });

    if (!atendimento) {
        throw new Error("Atendimento não encontrado.");
    }

    if (atendimento.evolucao) {
        throw new Error("Este atendimento já possui uma evolução clínica.");
    }

    return await prisma.EvolucaoClinica.create({
        data: {
            data: data || new Date(),
            mudancas_perfil,
            medicacao,
            recomendacoes,
            atendimento_id, 
        }
    });
};

const atualizarEvolucao = async (id_evolucao, dadosAtualizados) => {
    const evolucao = await prisma.EvolucaoClinica.findUnique({
        where: { id_evolucao },
    });

    if (!evolucao) {
        throw new Error("Evolução clínica não encontrada.");
    }

    return await prisma.EvolucaoClinica.update({
        where: { id_evolucao },
        data: dadosAtualizados,
    });
};

const excluirEvolucao = async (id_evolucao) => {
    const evolucao = await prisma.EvolucaoClinica.findUnique({
        where: { id_evolucao },
    });

    if (!evolucao) {
        throw new Error("Evolução clínica não encontrada.");
    }

    return await prisma.EvolucaoClinica.delete({
        where: { id_evolucao },
    });
};

module.exports = {
    listarEvolucoes,
    listarEvolucaoPorId,
    criarEvolucao,
    atualizarEvolucao,
    excluirEvolucao,
};