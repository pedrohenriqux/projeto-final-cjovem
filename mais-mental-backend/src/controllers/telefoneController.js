const Telefone = require('../models/telefoneModel');

exports.listarTelefones = async (req, res) => {
    try {
        const telefones = await Telefone.listarTelefones();
        res.status(200).json(telefones);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar os telefones." });
    }
};

exports.listarTelefonePorId = async (req, res) => {
    try {
        const { id_telefone } = req.params;
        const telefone = await Telefone.listarTelefonePorId(Number(id_telefone));

        if (!telefone) {
            return res.status(400).json({ error: "Telefone não encontrado." });
        }

        res.status(200).json(telefone);
    } catch (error) {
        res.status(404).json({ error: error.message || "Erro ao listar um telefone específico." });
    }
};

exports.criarTelefone = async (req, res) => {
    try {
        const {
            numero_telefone,
            paciente_id,
            profissional_id,
        } = req.body;

        if (!numero_telefone) {
            return res.status(400).json({ error: "O campo de número é obrigatório. Verifique e tente novamente." });
        }

        if ((paciente_id && profissional_id) || (!paciente_id && !profissional_id)) {
            return res.status(400).json({ error: "O número deve pertencer a um usuário paciente ou profissional, escolha um." });
        }

        const novoTelefone = await Telefone.criarTelefone({
            numero_telefone,
            paciente_id,
            profissional_id,
        });

        res.status(201).json(novoTelefone);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao criar o telefone." });
    }
};

exports.atualizarTelefone = async (req, res) => {
    try {
        const { id_telefone } = req.params;
        const { numero_telefone, paciente_id, profissional_id } = req.body;

        if (paciente_id && profissional_id) {
            return res.status(400).json({ error: "O telefone deve pertencer a um usuário paciente ou profissional, escolha um." });
        }

        const telefoneAtualizado = await Telefone.atualizarTelefone(Number(id_telefone), {
            numero_telefone,
            paciente_id,
            profissional_id,
        });
        
        res.status(200).json(telefoneAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao atualizar o telefone." });
    }
};

exports.excluirTelefone = async (req, res) => {
    try {
        const { id_telefone } = req.params;
        await Telefone.excluirTelefone(Number(id_telefone));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir o telefone." });
    }
};