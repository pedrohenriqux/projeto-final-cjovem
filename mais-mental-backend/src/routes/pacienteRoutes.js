const express = require('express');
const pacienteController = require('../controllers/pacienteController');

const router = express.Router();

router.get('/', pacienteController.listarPacientes);
router.get('/:id_paciente', pacienteController.listarPacientePorId);
router.post('/', pacienteController.criarPaciente);
router.put('/:id_paciente', pacienteController.atualizarPaciente);
router.delete('/:id_paciente', pacienteController.excluirPaciente);

module.exports = router;