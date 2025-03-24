const GrupoApoio = require('../models/grupoApoioModel');

exports.listarGrupos = async (req, res) => {
    try {
        const grupos = await GrupoApoio.listarGrupos();
        res.status(200).json(grupos);
    } catch (error) {
        console.error("Erro ao listar os grupos de apoio.", error);
        res.status(500).json({ error: error.message || "Erro ao listar os grupos de apoio." });
    }
};

exports.buscarGrupoPorId = async (req, res) => {
    try {
        const { id_grupo_apoio } = req.params;
        const grupo = await GrupoApoio.buscarGrupoPorId(Number(id_grupo_apoio));

        if (!grupo) {
            return res.status(400).json({ error: "Grupo não encontrado." });
        }

        res.status(200).json(grupo);
    } catch (error) {
        console.error("Erro ao listar o grupo específico.", error);
        res.status(404).json({ error: error.message || "Erro ao listar o grupo específico." });
    }
};

exports.criarGrupo = async (req, res) => {
    try {
        const { nome_grupo, descricao, regiao } = req.body;

        if (!nome_grupo || !regiao) {
            return res.status(400).json({ error: "Os campos de nome e região são obrigatórios." });
        }

        const novoGrupo = await GrupoApoio.criarGrupo({
            nome_grupo,
            descricao,
            regiao,
        });

        res.status(201).json(novoGrupo);
    } catch (error) {
        console.error("Erro ao criar o depoimento.", error);
        res.status(500).json({ error: error.message || "Erro ao criar o depoimento." });
    }
};

exports.atualizarGrupo = async (req, res) => {
    try {
        const { id_grupo_apoio } = req.params;
        const { nome_grupo, descricao, regiao } = req.body;

        const grupoAtualizado = await GrupoApoio.atualizarGrupo(Number(id_grupo_apoio), {
            nome_grupo,
            descricao,
            regiao,
        });

        res.status(200).json(grupoAtualizado);
    } catch (error) {
        console.error("Erro ao atualizar o grupo.", error);
        res.status(500).json({ error: error.message || "Erro ao atualizar o grupo." });
    }
};

exports.excluirGrupo = async (req, res) => {
    try {
        const { id_grupo_apoio } = req.params;
        await GrupoApoio.excluirGrupo(Number(id_grupo_apoio));
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao excluir o grupo.", error);
        res.status(500).json({ error: error.message || "Erro ao excluir o grupo." });
    }
};