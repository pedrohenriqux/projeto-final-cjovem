const prisma = require('../prisma');

const listarProfissionais = async () => {
    return await prisma.Profissional.findMany();
};

const listarProfissionalPorId = async (id_profissional) => {
    return await prisma.Profissional.findUnique({
        where: { id_profissional },
    });
};

const criarProfissional = async ({
    nome_profissional,
    data_nascimento,
    idade,
    cpf,
    genero,
    matricula_profissional,
    especializacao,
    descricao,
    faixa_etaria_atendimento,
    quantd_atendimentos_gratis,
    foto_profissional,
}) => {

    const profissionalExistente = await prisma.Profissional.findUnique({
        where: { cpf },
    });

    if (profissionalExistente) {
        throw new Error("Esse CPF já está em uso.");
    }

    return await prisma.Profissional.create({
        data: {
            nome_profissional,
            data_nascimento: new Date(data_nascimento),
            idade,
            cpf,
            genero,
            matricula_profissional,
            especializacao,
            descricao,
            faixa_etaria_atendimento,
            quantd_atendimentos_gratis,
            foto_profissional,
        }
    });
};

const atualizarProfissional = async (id_profissional, dadosAtualizados) => {
    const profissional = await prisma.Profissional.findUnique({
        where: { id_profissional },
    });

    if (!profissional) {
        throw new Error("Profissional não encontrado.");
    }

    return await prisma.Profissional.update({
        where: { id_profissional },
        data: dadosAtualizados,
    });
};

const excluirProfissional = async (id_profissional) => {
    const profissional = await prisma.Profissional.findUnique({
        where: { id_profissional },
        include: { atendimentos_profissional: true },
    });

    if (profissional.atendimentos_profissional.length > 0) {
        throw new Error("O profissional está associado a algum atendimento e não pode ser excluído.");
    }

    return await prisma.Profissional.delete({
        where: { id_profissional },
    });
};

module.exports = {
    listarProfissionais,
    listarProfissionalPorId,
    criarProfissional,
    atualizarProfissional,
    excluirProfissional,
};