const prisma = require('../prisma');

const listarUsers = async () => {
    return await prisma.User.findMany();
};

const buscarUserPorId = async (id_user) => {
    return await prisma.User.findUnique({
        where: { id_user },
    });
};

const criarUser = async ({ email_user, senha_user, type_user }) => {
    const usuarioExistente = await prisma.User.findUnique({
        where: { email_user },
    });

    if (usuarioExistente) {
        throw new Error("Esse e-mail já está em uso.");
    }

    return await prisma.User.create({
        data: {
            email_user,
            senha_user,
            type_user,
        }
    });
};

const atualizarUser = async (id_user, { email_user, senha_user, type_user }) => {
    const user = await prisma.User.findUnique({
        where: { id_user },
    });

    if (!user) {
        throw new Error("Usuário não encontrado.");
    }

    if (email_user && email_user !== user.email_user) {
        const emailExistente = await prisma.User.findUnique({
            where: { email_user },
        });

        if (emailExistente) {
            throw new Error("Esse e-mail já está em uso.");
        }
    }

    return await prisma.User.update({
        where: { id_user },
        data: {
            email_user,
            senha_user,
            type_user,
        },
    });
};

const excluirUser = async (id_user) => {
    const user = await prisma.User.findUnique({
        where: { id_user },
        include: { paciente: true, profissional: true },
    });

    if (user.paciente || user.profissional) {
        throw new Error("Usuário está associado a um paciente ou profissional e não pode ser excluído.");
    }

    return await prisma.User.delete({
        where: { id_user },
    });
};

module.exports = {
    listarUsers,
    buscarUserPorId,
    criarUser,
    atualizarUser,
    excluirUser,
};