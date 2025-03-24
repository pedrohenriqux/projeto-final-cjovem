const prisma = require('../prisma');

const listarTelefones = async () => {
    return await prisma.Telefone.findMany();
};

const listarTelefonePorId = async (id_telefone) => {
    return await prisma.Telefone.findUnique({
        where: { id_telefone },
    });
};

const criarTelefone = async ({
    numero_telefone,
    paciente_id,
    profissional_id,
}) => {

    if ((paciente_id && profissional_id) || (!paciente_id && !profissional_id)) {
        throw new Error("O telefone deve estar vinculado a um usuário.");
    }

    return await prisma.Telefone.create({
        data: {
            numero_telefone,
            paciente_id,
            profissional_id,
        }
    });
};

const atualizarTelefone = async (id_telefone, { numero_telefone, paciente_id, profissional_id }) => {
    const telefone = await prisma.Telefone.findUnique({
        where: { id_telefone },
    });

    if (!telefone) {
        throw new Error("Telefone não encontrado.");
    }

    return await prisma.Telefone.update({
        where: { id_telefone },
        data: {
            numero_telefone,
            paciente_id,
            profissional_id,
        },
    });
};

const excluirTelefone = async (id_telefone) => {
    const telefone = await prisma.Telefone.findUnique({
        where: { id_telefone },
        include: {
            paciente: true,
            profissional: true,
        },
    });

    if (telefone.paciente || telefone.profissional) {
        throw new Error("O telefone está associado a um paciente ou profissional e não pode ser excluído.");
    }

    return await prisma.Telefone.delete({
        where: { id_telefone },
    });
};

module.exports = {
    listarTelefones,
    listarTelefonePorId,
    criarTelefone,
    atualizarTelefone,
    excluirTelefone,
};