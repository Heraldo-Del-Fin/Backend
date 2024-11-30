const db = require('../config/db');
const { validationResult } = require('express-validator');

// Obtener todos los vehículos
const getVehiculos = async (req, res) => {
  try {
    const { marca, modelo, tipo_combustible } = req.query;
    let sql = 'SELECT * FROM Vehiculo';
    const params = [];

    if (marca) {
      sql += ' WHERE marca LIKE ?';
      params.push(`%${marca}%`);
    }
    if (modelo) {
      sql += marca ? ' AND modelo LIKE ?' : ' WHERE modelo LIKE ?';
      params.push(`%${modelo}%`);
    }
    if (tipo_combustible) {
      sql += marca || modelo ? ' AND tipo_combustible = ?' : ' WHERE tipo_combustible = ?';
      params.push(tipo_combustible);
    }

    db.query(sql, params, (err, results) => {
      if (err) {
        console.error('Error al obtener vehículos:', err.message);
        return res.status(500).json({ message: 'Error al obtener vehículos.' });
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error('Error inesperado:', error.message);
    res.status(500).json({ message: 'Ocurrió un error inesperado.' });
  }
};

// Crear un nuevo vehículo
const addVehiculo = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { placa, modelo, marca, anio_fabricacion, capacidad, tipo_combustible } = req.body;

    const sql = 'INSERT INTO Vehiculo (placa, modelo, marca, anio_fabricacion, capacidad, tipo_combustible) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [placa, modelo, marca, anio_fabricacion, capacidad, tipo_combustible], (err, result) => {
      if (err) {
        console.error('Error al agregar vehículo:', err.message);
        return res.status(500).json({ message: 'Error al insertar el vehículo.' });
      }
      res.status(201).json({ message: 'Vehículo agregado exitosamente.' });
    });
  } catch (error) {
    console.error('Error inesperado:', error.message);
    res.status(500).json({ message: 'Ocurrió un error inesperado.' });
  }
};

module.exports = { getVehiculos, addVehiculo };


