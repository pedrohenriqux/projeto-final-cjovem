const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.listarUsers);
router.get('/:id_user', userController.buscarUserPorId);
router.post('/', userController.criarUser);
router.put('/:id_user', userController.atualizarUser);
router.delete('/:id_user', userController.excluirUser);

module.exports = router;