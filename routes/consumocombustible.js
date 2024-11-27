const express = require('express');
const { getConsumos } = require('../controllers/consumoController');
const router = express.Router();

// Ruta para obtener todos los consumos de combustible
router.get('/', getConsumos);

module.exports = router;
