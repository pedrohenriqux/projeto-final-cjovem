const express = require('express');
const depoimentoController = require('../controllers/depoimentoController');

const router = express.Router();

router.get('/', depoimentoController.listarDepoimentos);
router.get('/:id_depoimento', depoimentoController.buscarDepoimentoPorId);
router.post('/', depoimentoController.criarDepoimentos);
router.put('/:id_depoimento', depoimentoController.atualizarDepoimento);
router.delete('/:id_depoimento', depoimentoController.excluirDepoimento);

module.exports = router;