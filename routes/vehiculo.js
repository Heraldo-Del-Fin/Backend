const express = require('express');
const { getVehiculos } = require('../controllers/vehiculoController');
const router = express.Router();

// Ruta para obtener todos los vehículos
router.get('/', getVehiculos);

module.exports = router;
