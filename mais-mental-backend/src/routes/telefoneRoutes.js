const express = require('express');
const telefoneController = require('../controllers/telefoneController');

const router = express.Router();

router.get('/', telefoneController.listarTelefones);
router.get('/:id_telefone', telefoneController.buscarTelefonePorId);
router.post('/', telefoneController.criarTelefone);
router.put('/:id_telefone', telefoneController.atualizarTelefone);
router.delete('/:id_telefone', telefoneController.excluirTelefone);

module.exports = router;