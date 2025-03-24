const prisma = require('../prisma');

const listarAtendimentos = async () => {
    return await prisma.Atendimento.findMany({
        include: { paciente: true, profissional: true }
    });
};

const listarAtendimentoPorId = async (id_atendimento) => {
    return await prisma.Atendimento.findUnique({
        where: { id_atendimento },
    });
};

const criarAtendimento = async ({
    data_atendimento,
    sintomas,
    relato_atendimento,
    status,
    evolucao,
    paciente_id,
    profissional_id,
}) => {

    const conflitoHorario = await prisma.Atendimento.findFirst({
        where: {
            profissional_id,
            data_atendimento,
        },
    });

    if (conflitoHorario) {
        throw new Error("Já existe um atendimento agendado para este horário.");
    }

    return await prisma.Atendimento.create({
        data: {
            data_atendimento,
            sintomas,
            relato_atendimento,
            status,
            evolucao,
            paciente_id,
            profissional_id,
        }
    });
};

const atualizarAtendimento = async (id_atendimento, dadosAtualizados) => {
    const atendimento = await prisma.Atendimento.findUnique({
        where: { id_atendimento },
    });

    if (!atendimento) {
        throw new Error("Atendimento não encontrado.");
    }

    return await prisma.Atendimento.update({
        where: { id_atendimento },
        data: dadosAtualizados,
    });
};

const excluirAtendimento = async (id_atendimento) => {
    const evolucao = await prisma.EvolucaoClinica.findFirst({
        where: { atendimento_id: id_atendimento },
    });

    if (evolucao) {
        throw new Error("Atendimento possui uma evolução clínica e não pode ser excluído.");
    }

    return await prisma.Atendimento.delete({
        where: { id_atendimento },
    });
};

module.exports = {
    listarAtendimentos,
    listarAtendimentoPorId,
    criarAtendimento,
    atualizarAtendimento,
    excluirAtendimento,
};