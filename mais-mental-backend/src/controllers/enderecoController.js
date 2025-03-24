const Endereco = require('../models/enderecoModel');

exports.listarEnderecos = async (req, res) => {
    try {
        const enderecos = await Endereco.listarEnderecos();
        res.status(200).json(enderecos);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar os endereços." });
    }
};

exports.buscarEnderecoPorId = async (req, res) => {
    try {
        const { id_endereco } = req.params;
        const endereco = await Endereco.buscarEnderecoPorId(Number(id_endereco));

        if (!endereco) {
            return res.status(400).json({ error: "Endereço não encontrado." });
        }

        res.status(200).json(endereco);
    } catch (error) {
        res.status(404).json({ error: error.message || "Erro ao listar um endereço específico." });
    }
};

exports.criarEndereco = async (req, res) => {
    try {
        const {
            cep,
            cidade,
            uf,
            bairro,
            rua,
            numero_residencia,
            paciente_id,
            profissional_id,
        } = req.body;

        if (!cep || !cidade || !uf || !bairro || !rua) {
            return res.status(400).json({ error: "Alguns campos do cadastro são obrigatórios. Verifique e tente novamente" });
        }

        if ((paciente_id && profissional_id) || (!paciente_id && !profissional_id)) {
            return res.status(400).json({ error: "O endereço deve pertencer a um usuário paciente ou profissional, escolha um." });
        }

        const novoEndereco = await Endereco.criarEndereco({
            cep,
            cidade,
            uf,
            bairro,
            rua,
            numero_residencia,
            paciente_id,
            profissional_id,
        });

        res.status(201).json(novoEndereco);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao criar o endereço." });
    }
};

exports.atualizarEndereco = async (req, res) => {
    try {
        const { id_endereco } = req.params;
        const dadosAtualizados = req.body;

        if (dadosAtualizados.paciente_id && dadosAtualizados.profissional_id) {
            return res.status(400).json({ error: "O endereço deve pertencer a um usuário paciente ou profissional, escolha um." });
        }

        const enderecoAtualizado = await Endereco.atualizarEndereco(Number(id_endereco), dadosAtualizados);
        res.status(200).json(enderecoAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao atualizar o endereço." });
    }
};

exports.excluirEndereco = async (req, res) => {
    try {
        const { id_endereco } = req.params;
        await Endereco.excluirEndereco(Number(id_endereco));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir o endereço." });
    }
};