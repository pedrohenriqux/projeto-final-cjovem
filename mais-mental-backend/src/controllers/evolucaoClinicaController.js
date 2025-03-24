const EvolucaoClinica = require('../models/evolucaoClinicaModel');

exports.listarEvolucoes = async (req, res) => {
    try {
        const evolucoes = await EvolucaoClinica.listarEvolucoes();
        res.status(200).json(evolucoes);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar as evoluções." });
    }
};

exports.buscarEvolucaoPorId = async (req, res) => {
    try {
        const { id_evolucao } = req.params;
        const evolucao = await EvolucaoClinica.buscarEvolucaoPorId(Number(id_evolucao));

        if (!evolucao) {
            return res.status(400).json({ error: "Evolução clínica não encontrada." });
        }

        res.status(200).json(evolucao);
    } catch (error) {
        res.status(404).json({ error: error.message || "Erro ao listar uma evolução clínica específica." });
    }
};

exports.criarEvolucao = async (req, res) => {
    try {
        const {
            data,
            mudancas_perfil,
            medicacao,
            recomendacoes,
            atendimento_id,
        } = req.body;

        if (!data) {
            return res.status(400).json({ error: "A inserção da data é obrigatória. Verifique e tente novamente." });
        }

        const novaEvolucao = await EvolucaoClinica.criarEvolucao({
            data,
            mudancas_perfil,
            medicacao,
            recomendacoes,
            atendimento_id,
        });

        res.status(201).json(novaEvolucao);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao criar a evolução clínica." });
    }
};

exports.atualizarEvolucao = async (req, res) => {
    try {
        const { id_evolucao } = req.params;
        const dadosAtualizados = req.body;
        const evolucaoAtualizada = await EvolucaoClinica.atualizarEvolucao(Number(id_evolucao), dadosAtualizados);
        res.status(200).json(evolucaoAtualizada);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao atualizar a evolução clínica." });
    }
};

exports.excluirEvolucao = async (req, res) => {
    try {
        const { id_evolucao } = req.params;
        await EvolucaoClinica.excluirEvolucao(Number(id_evolucao));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir a evolução clínica." });
    }
};