const express = require('express');
const { getViajes, createViaje } = require('../controllers/viajesController');
const router = express.Router();

// Ruta para obtener todos los viajes
router.get('/', getViajes);

// Ruta para crear un nuevo viaje
router.post('/', createViaje);

module.exports = router;
