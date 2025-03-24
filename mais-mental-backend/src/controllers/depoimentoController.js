const Depoimento = require('../models/depoimentoModel');

exports.listarDepoimentos = async (req, res) => {
    try {
        const depoimentos = await Depoimento.listarDepoimentos();
        res.status(200).json(depoimentos);
    } catch (error) {
        console.error("Erro ao listar os depoimentos.", error);
        res.status(500).json({ error: error.message || "Erro ao listar os depoimentos." });
    }
};

exports.buscarDepoimentoPorId = async (req, res) => {
    try {
        const { id_depoimento } = req.params;
        const depoimento = await Depoimento.buscarDepoimentoPorId(Number(id_depoimento));

        if (!depoimento) {
            return res.status(404).json({ error: "Depoimento não encontrado." });
        }

        res.status(200).json(depoimento);
    } catch (error) {
        console.error("Erro ao listar o depoimento.", error);
        res.status(404).json({ error: error.message || "Erro ao listar o depoimento." });
    }
};

exports.criarDepoimentos = async (req, res) => {
    try {
        const { texto_depoimento } = req.body;

        if (!texto_depoimento) {
            return res.status(400).json({ error: "Os campos de texto e data são obrigatórios." })
        }

        const novoDepoimento = await Depoimento.criarDepoimentos({
            texto_depoimento,
        });

        res.status(201).json(novoDepoimento);
    } catch (error) {
        console.error("Erro ao criar o depoimento.", error);
        res.status(500).json({ error: error.message || "Erro ao criar o depoimento." });
    }
};

exports.atualizarDepoimento = async (req, res) => {
    try {
        const { id_depoimento } = req.params;
        const { texto_depoimento } = req.body;

        if (!texto_depoimento) {
            return res.status(400).json({ error: "Os campos de texto e data são obrigatórios." });
        }

        const depoimentoAtualizado = await Depoimento.atualizarDepoimento(Number(id_depoimento), {
            texto_depoimento,
        });

        res.status(200).json(depoimentoAtualizado);
    } catch (error) {
        console.error("Erro ao atualizar o depoimento.", error);
        res.status(500).json({ error: error.message || "Erro ao atualizar o depoimento." });
    }
};

exports.excluirDepoimento = async (req, res) => {
    try {
        const { id_depoimento } = req.params;
        await Depoimento.excluirDepoimento(Number(id_depoimento));
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao excluir o depoimento.", error);
        res.status(500).json({ error: error.message || "Erro ao excluir o depoimento." });
    }
};