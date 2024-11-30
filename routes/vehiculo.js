const express = require('express');
const { body } = require('express-validator');
const { getVehiculos, addVehiculo } = require('../controllers/vehiculoController');

const router = express.Router();

// Ruta para obtener todos los vehículos
router.get('/', getVehiculos);

// Ruta para crear un nuevo vehículo
router.post(
  '/',
  [
    body('placa').isString().notEmpty().withMessage('La placa es obligatoria'),
    body('modelo').isString().notEmpty().withMessage('El modelo es obligatorio'),
    body('marca').isString().notEmpty().withMessage('La marca es obligatoria'),
    body('anio_fabricacion').isInt({ min: 1900 }).withMessage('El año de fabricación debe ser válido'),
    body('capacidad').isFloat({ min: 0 }).withMessage('La capacidad debe ser un número positivo'),
    body('tipo_combustible').isString().notEmpty().withMessage('El tipo de combustible es obligatorio'),
  ],
  addVehiculo
);

module.exports = router;
