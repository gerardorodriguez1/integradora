const express = require('express');
const router = express.Router();

const usuCtrl = require('../controllers/usuario.controller');

router.get('/', usuCtrl.getUsuario);
router.post('/', usuCtrl.createUsuario);
router.get('/:id', usuCtrl.getAUsuario);
router.put('/:id', usuCtrl.editUsuario);
router.delete('/:id', usuCtrl.deleteUsuario)

module.exports = router;