const express = require('express');
const atendimentoController = require('../controllers/atendimentoController');

const router = express.Router();

router.get('/', atendimentoController.listarAtendimentos);
router.get('/:id_atendimento', atendimentoController.buscarAtendimentoPorId);
router.post('/', atendimentoController.criarAtendimento);
router.put('/:id_atendimento', atendimentoController.atualizarAtendimento);
router.delete('/:id_atendimento', atendimentoController.excluirAtendimento);

module.exports = router;