const express = require('express');
const evolucaoController = require('../controllers/evolucaoClinicaController');

const router = express.Router();

router.get('/', evolucaoController.listarEvolucoes);
router.get('/:id_evolucao', evolucaoController.listarEvolucaoPorId);
router.post('/', evolucaoController.criarEvolucao);
router.put('/:id_evolucao', evolucaoController.atualizarEvolucao);
router.delete('/:id_evolucao', evolucaoController.excluirEvolucao);

module.exports = router;