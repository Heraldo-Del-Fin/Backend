const express = require('express');
const { body } = require('express-validator');
const { getMantenimientos } = require('../controllers/mantenimientoController');

const router = express.Router();

// Ruta para obtener todos los mantenimientos
router.get('/', getMantenimientos);

module.exports = router;
