const express = require('express');
const { getConductores, createConductor } = require('../controllers/conductorController');

const router = express.Router();

// Ruta para obtener todos los conductores
router.get('/', getConductores);

// Ruta para crear un nuevo conductor
router.post('/', createConductor);

module.exports = router;
