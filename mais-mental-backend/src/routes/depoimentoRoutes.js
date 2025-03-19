const express = require('express');
const depoimentoController = require('../controllers/depoimentoController');

const router = express.Router();

router.get('/', depoimentoController.listarDepoimentos);
router.get('/:id', depoimentoController.listarDepoimentosPorId);
router.post('/', depoimentoController.criarDepoimentos);
router.put('/:id', depoimentoController.atualizarDepoimentos);
router.delete('/:id', depoimentoController.excluirDepoimentos);

module.exports = router;