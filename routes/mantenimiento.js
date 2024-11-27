const express = require('express');
const { getMantenimientos } = require('../controllers/mantenimientoController');
const router = express.Router();

// Ruta para obtener todos los mantenimientos
router.get('/', getMantenimientos);

module.exports = router;
