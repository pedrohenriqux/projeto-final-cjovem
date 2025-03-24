const prisma = require('../prisma');

const listarPacientes = async () => {
    return await prisma.Paciente.findMany();
};

const listarPacientePorId = async (id_paciente) => {
    return await prisma.Paciente.findUnique({
        where: { id_paciente },
    });
};

const criarPaciente = async ({
    nome_paciente,
    data_nascimento,
    idade,
    cpf,
    genero,
    ocupacao,
    principal_queixa,
    historico_familiar,
    uso_medicamentos,
    objetivo_terapia,
    responsavel,
    telefone_responsavel,
    foto_paciente,
    user_id,
}) => {

    const pacienteExistente = await prisma.Paciente.findUnique({
        where: { cpf },
    });

    if (pacienteExistente) {
        throw new Error("Esse CPF já está em uso.");
    }

    return await prisma.Paciente.create({
        data: {
            nome_paciente,
            data_nascimento: new Date(data_nascimento),
            idade,
            cpf,
            genero,
            ocupacao,
            principal_queixa,
            historico_familiar,
            uso_medicamentos,
            objetivo_terapia,
            responsavel,
            telefone_responsavel,
            foto_paciente,
            user_id,
        }
    });
};

const atualizarPaciente = async (id_paciente, dadosAtualizados) => {
    const paciente = await prisma.Paciente.findUnique({
        where: { id_paciente },
    });

    if (!paciente) {
        throw new Error("Paciente não encontrado.");
    }

    return await prisma.Paciente.update({
        where: { id_paciente },
        data: dadosAtualizados,
    });
};

const excluirPaciente = async (id_paciente) => {
    const paciente = await prisma.Paciente.findUnique({
        where: { id_paciente },
        include: { atendimentos_paciente: true },
    });

    if (paciente.atendimentos_paciente.length > 0) {
        throw new Error("O paciente está associado a algum atendimento e não pode ser excluído.");
    }

    return await prisma.Paciente.delete({
        where: { id_paciente },
    });
};

module.exports = {
    listarPacientes,
    listarPacientePorId,
    criarPaciente,
    atualizarPaciente,
    excluirPaciente,
};