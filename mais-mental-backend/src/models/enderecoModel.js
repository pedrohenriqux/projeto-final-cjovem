const prisma = require('../prisma');

const listarEnderecos = async () => {
    return await prisma.Endereco.findMany();
};

const buscarEnderecoPorId = async (id_endereco) => {
    return await prisma.Endereco.findUnique({
        where: { id_endereco },
    });
};

const criarEndereco = async ({
    cep,
    cidade,
    uf,
    bairro,
    rua,
    numero_residencia,
    paciente_id,
    profissional_id,
}) => {

    if ((paciente_id && profissional_id) || (!paciente_id && !profissional_id)) {
        throw new Error("O endereço deve estar vinculado a um usuário.");
    }

    return await prisma.Endereco.create({
        data: {
            cep,
            cidade,
            uf: uf.toUpperCase(),
            bairro,
            rua,
            numero_residencia,
            paciente_id,
            profissional_id,
        }
    });
};

const atualizarEndereco = async (id_endereco, dadosAtualizados) => {
    const endereco = await prisma.Endereco.findUnique({
        where: { id_endereco },
    });

    if (!endereco) {
        throw new Error("Endereço não encontrado.");
    }

    return await prisma.Endereco.update({
        where: { id_endereco },
        data: dadosAtualizados,
    });
};

const excluirEndereco = async (id_endereco) => {
    const endereco = await prisma.Endereco.findUnique({
        where: { id_endereco },
        include: {
            paciente: true,
            profissional: true,
        },
    });

    if (endereco.paciente || endereco.profissional) {
        throw new Error("O endereço está associado a um paciente ou profissional e não pode ser excluído.");
    }

    return await prisma.Endereco.delete({
        where: { id_endereco },
    });
};

module.exports = {
    listarEnderecos,
    buscarEnderecoPorId,
    criarEndereco,
    atualizarEndereco,
    excluirEndereco,
};