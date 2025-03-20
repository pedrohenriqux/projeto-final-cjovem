const express = require('express');
const depoimentoController = require('../controllers/depoimentoController');

const router = express.Router();

router.get('/', depoimentoController.listarDepoimentos);
router.get('/:id_depoimento', depoimentoController.listarDepoimentosPorId);
router.post('/', depoimentoController.criarDepoimentos);
router.put('/:id_depoimento', depoimentoController.atualizarDepoimentos);
router.delete('/:id_depoimento', depoimentoController.excluirDepoimentos);

module.exports = router;