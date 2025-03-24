const express = require('express');
const enderecoController = require('../controllers/enderecoController');

const router = express.Router();

router.get('/', enderecoController.listarEnderecos);
router.get('/:id_endereco', enderecoController.buscarEnderecoPorId);
router.post('/', enderecoController.criarEndereco);
router.put('/:id_endereco', enderecoController.atualizarEndereco);
router.delete('/:id_endereco', enderecoController.excluirEndereco);

module.exports = router;