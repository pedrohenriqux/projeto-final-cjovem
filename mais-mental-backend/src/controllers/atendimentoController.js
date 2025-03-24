const Atendimento = require('../models/atendimentoModel');

exports.listarAtendimentos = async (req, res) => {
    try {
        const atendimentos = await Atendimento.listarAtendimentos();
        res.status(200).json(atendimentos);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar os atendimentos." });
    }
};

exports.buscarAtendimentoPorId = async (req, res) => {
    try {
        const { id_atendimento } = req.params;
        const atendimento = await Atendimento.buscarAtendimentoPorId(Number(id_atendimento));

        if (!atendimento) {
            return res.status(400).json({ error: "Atendimento não encontrado." });
        }

        res.status(200).json(atendimento);
    } catch (error) {
        res.status(404).json({ error: error.message || "Erro ao listar um atendimento específico." });
    }
};

exports.criarAtendimento = async (req, res) => {
    try {
        const {
            data_atendimento,
            sintomas,
            relato_atendimento,
            status,
            evolucao,
            paciente_id,
            profissional_id,
        } = req.body;

        if (!data_atendimento || !status || !paciente_id || !profissional_id) {
            return res.status(400).json({ error: "Alguns campos são obrigatórios. Verifique e tente novamente." });
        }

        const [paciente, profissional] = await Promise.all([
            prisma.Paciente.findUnique({
                where: { id_paciente: paciente_id }
            }),
            prisma.Profissional.findUnique({
                where: { id_profissional: profissional_id }
            }),
        ]);

        if (!paciente || !profissional) {
            return res.status(404).json({ error: "Paciente ou profissional não encontrado." });
        }

        const novoAtendimento = await Atendimento.criarAtendimento({
            data_atendimento,
            sintomas,
            relato_atendimento,
            status,
            evolucao,
            paciente_id,
            profissional_id,
        });

        res.status(201).json(novoAtendimento);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao criar o atendimento." });
    }
};

exports.atualizarAtendimento = async (req, res) => {
    try {
        const { id_atendimento } = req.params;
        const dadosAtualizados = req.body;
        const atendimentoAtualizado = await Atendimento.atualizarAtendimento(Number(id_atendimento), dadosAtualizados);
        res.status(200).json(atendimentoAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao atualizar o atendimento." });
    }
};

exports.excluirAtendimento = async (req, res) => {
    try {
        const { id_atendimento } = req.params;
        await Atendimento.excluirAtendimento(Number(id_atendimento));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir o atendimento." });
    }
};