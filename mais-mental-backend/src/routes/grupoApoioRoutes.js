const express = require('express');
const grupoApoioController = require('../controllers/grupoApoioController');

const router = express.Router();

router.get('/', grupoApoioController.listarGrupos);
router.get('/:id_grupo_apoio', grupoApoioController.buscarGrupoPorId);
router.post('/', grupoApoioController.criarGrupo);
router.put('/:id_grupo_apoio', grupoApoioController.atualizarGrupo);
router.delete('/:id_grupo_apoio', grupoApoioController.excluirGrupo);

module.exports = router;