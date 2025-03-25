const Profissional = require('../models/profissionalModel');

exports.listarProfissionais = async (req, res) => {
    try {
        const profissionais = await Profissional.listarProfissionais();
        res.status(200).json(profissionais);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar os profissionais." });
    }
};

exports.buscarProfissionalPorId = async (req, res) => {
    try {
        const { id_profissional } = req.params;
        const profissional = await Profissional.buscarProfissionalPorId(Number(id_profissional));

        if (!profissional) {
            return res.status(400).json({ error: "Profissional não encontrado." });
        }

        res.status(200).json(profissional);
    } catch (error) {
        res.status(404).json({ error: error.message || "Erro ao listar um profissional específico." });
    }
};

exports.criarProfissional = async (req, res) => {
    try {
        const {
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
            user_id,
        } = req.body;

        if (!nome_profissional || !data_nascimento || !idade || !cpf || !genero ||
            !matricula_profissional || !especializacao || !faixa_etaria_atendimento || !quantd_atendimentos_gratis) {

            return res.status(400).json({ error: "Alguns campos do cadastro são obrigatórios. Verifique e tente novamente" });
        }

        const novoProfissional = await Profissional.criarProfissional({
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
            user_id,
        });

        res.status(201).json(novoProfissional);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao criar o profissional." });
    }
};

exports.atualizarProfissional = async (req, res) => {
    try {
        const { id_profissional } = req.params;
        const dadosAtualizados = req.body;

        const profissionalAtualizado = await Profissional.atualizarProfissional(Number(id_profissional), dadosAtualizados);
        res.status(200).json(profissionalAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao atualizar o profissional." });
    }
};

exports.excluirProfissional = async (req, res) => {
    try {
        const { id_profissional } = req.params;
        await Profissional.excluirProfissional(Number(id_profissional));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir o profissional." });
    }
};