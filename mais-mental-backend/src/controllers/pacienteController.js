const Paciente = require('../models/pacienteModel');

exports.listarPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.listarPacientes();
        res.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar os pacientes." });
    }
};

exports.listarPacientePorId = async (req, res) => {
    try {
        const { id_paciente } = req.params;
        const paciente = await Paciente.listarPacientePorId(Number(id_paciente));

        if (!paciente) {
            return res.status(400).json({ error: "Paciente não encontrado." });
        }

        res.status(200).json(paciente);
    } catch (error) {
        res.status(404).json({ error: error.message || "Erro ao listar um paciente específico." });
    }
};

exports.criarPaciente = async (req, res) => {
    try {
        const {
            nome_paciente,
            data_nascimento,
            idade,
            cpf,
            genero,
            ocupacao,
            principal_queixa,
            historico_familiar,
            uso_medicamentos,
            objetivo_terapia,
            responsavel,
            telefone_responsavel,
            foto_paciente,
            user_id,
        } = req.body;

        if (!nome_paciente || !data_nascimento || !idade || !cpf || !genero ||
            !principal_queixa || !historico_familiar || !uso_medicamentos || !objetivo_terapia ||
            !user_id) {

            return res.status(400).json({ error: "Alguns campos do cadastro são obrigatórios. Verifique e tente novamente" });
        }

        const novoPaciente = await Paciente.criarPaciente({
            nome_paciente,
            data_nascimento,
            idade,
            cpf,
            genero,
            ocupacao,
            principal_queixa,
            historico_familiar,
            uso_medicamentos,
            objetivo_terapia,
            responsavel,
            telefone_responsavel,
            foto_paciente,
            user_id,
        });

        res.status(201).json(novoPaciente);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao criar o paciente." });
    }
};

exports.atualizarPaciente = async (req, res) => {
    try {
        const { id_paciente } = req.params;
        const dadosAtualizados = req.body;

        const pacienteAtualizado = await Paciente.atualizarPaciente(Number(id_paciente), dadosAtualizados);
        res.status(200).json(pacienteAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao atualizar o paciente." });
    }
};

exports.excluirPaciente = async (req, res) => {
    try {
        const { id_paciente } = req.params;
        await Paciente.excluirPaciente(Number(id_paciente));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir o paciente." });
    }
};