const express = require('express');
const { body } = require('express-validator');
const { getViajes, createViaje } = require('../controllers/viajesController');

const router = express.Router();

// Ruta para obtener todos los viajes
router.get('/', getViajes);

// Ruta para crear un nuevo viaje
router.post(
  '/',
  [
    body('fecha_inicio').isDate().withMessage('La fecha de inicio debe ser válida'),
    body('fecha_fin').isDate().withMessage('La fecha de fin debe ser válida'),
    body('destino').isString().notEmpty().withMessage('El destino es obligatorio'),
    body('km_recorridos').isFloat({ min: 0 }).withMessage('Los km recorridos deben ser positivos'),
    body('ID_conductor').isInt().withMessage('El ID del conductor debe ser un número entero'),
    body('placa').isString().notEmpty().withMessage('La placa es obligatoria'),
  ],
  createViaje
);

module.exports = router;
