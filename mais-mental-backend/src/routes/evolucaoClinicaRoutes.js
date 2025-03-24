const express = require('express');
const evolucaoClinicaController = require('../controllers/evolucaoClinicaController');

const router = express.Router();

router.get('/', evolucaoClinicaController.listarEvolucoes);
router.get('/:id_evolucao', evolucaoClinicaController.buscarEvolucaoPorId);
router.post('/', evolucaoClinicaController.criarEvolucao);
router.put('/:id_evolucao', evolucaoClinicaController.atualizarEvolucao);
router.delete('/:id_evolucao', evolucaoClinicaController.excluirEvolucao);

module.exports = router;