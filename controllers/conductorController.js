const db = require('../config/db');

// Obtener todos los conductores
const getConductores = async (req, res) => {
  try {
    const { nombre_apellido, licencia } = req.query;
    let sql = 'SELECT * FROM Conductor';
    const params = [];

    if (nombre_apellido) {
      sql += ' WHERE nombre_apellido LIKE ?';
      params.push(`%${nombre_apellido}%`);
    }
    if (licencia) {
      sql += nombre_apellido ? ' AND licencia = ?' : ' WHERE licencia = ?';
      params.push(licencia);
    }

    db.query(sql, params, (err, results) => {
      if (err) {
        console.error('Error al obtener conductores:', err.message);
        return res.status(500).json({ message: 'Error al obtener conductores.' });
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error('Error inesperado:', error.message);
    res.status(500).json({ message: 'Ocurrió un error inesperado.' });
  }
};

// Crear un nuevo conductor
const createConductor = async (req, res) => {
  try {
    const { ID_conductor, nombre_apellido, licencia } = req.body;

    if (!ID_conductor || !nombre_apellido || !licencia) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const sql = 'INSERT INTO Conductor (ID_conductor, nombre_apellido, licencia) VALUES (?, ?, ?)';
    db.query(sql, [ID_conductor, nombre_apellido, licencia], (err, results) => {
      if (err) {
        console.error('Error al crear conductor:', err.message);
        return res.status(500).json({ message: 'Error al insertar el conductor en la base de datos.' });
      }
      res.status(201).json({ message: 'Conductor creado exitosamente.' });
    });
  } catch (error) {
    console.error('Error inesperado:', error.message);
    res.status(500).json({ message: 'Ocurrió un error inesperado.' });
  }
};

module.exports = { getConductores, createConductor };
