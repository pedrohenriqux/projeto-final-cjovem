const express = require('express');
const profissionalController = require('../controllers/profissionalController');

const router = express.Router();

router.get('/', profissionalController.listarProfissionais);
router.get('/:id_profissional', profissionalController.buscarProfissionalPorId);
router.post('/', profissionalController.criarProfissional);
router.put('/:id_profissional', profissionalController.atualizarProfissional);
router.delete('/:id_profissional', profissionalController.excluirProfissional);

module.exports = router;