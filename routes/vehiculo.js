const express = require('express');
const { getVehiculos, addVehiculo } = require('../controllers/vehiculoController');
const router = express.Router();

// Ruta para obtener todos los vehículos
router.get('/', getVehiculos);

router.post('/', addVehiculo);

module.exports = router;
