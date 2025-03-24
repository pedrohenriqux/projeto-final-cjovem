const User = require('../models/userModel');

exports.listarUsers = async (req, res) => {
    try {
        const users = await User.listarUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar os usuários." });
    }
};

exports.listarUserPorId = async (req, res) => {
    try {
        const { id_user } = req.params;
        const user = await User.listarUserPorId(Number(id_user));

        if (!user) {
            return res.status(400).json({ error: "Usuário não encontrado." });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message || "Erro ao listar um usuário específico." });
    }
};

exports.criarUser = async (req, res) => {
    try {
        const { email_user, senha_user, type_user } = req.body;

        if (!email_user || !senha_user || !type_user) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const novoUser = await User.criarUser({
            email_user,
            senha_user,
            type_user,
        });

        res.status(201).json(novoUser);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao criar o usuário." });
    }
};

exports.atualizarUser = async (req, res) => {
    try {
        const { id_user } = req.params;
        const { email_user, senha_user, type_user } = req.body;

        const userAtualizado = await User.atualizarUser(Number(id_user), {
            email_user,
            senha_user,
            type_user,
        });

        res.status(200).json(userAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao atualizar o usuário." });
    }
};

exports.excluirUser = async (req, res) => {
    try {
        const { id_user } = req.params;
        await User.excluirUser(Number(id_user));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir o usuário." });
    }
};