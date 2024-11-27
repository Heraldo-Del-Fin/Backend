const db = require('../config/db');

// Obtener todos los conductores
const getConductores = (req, res) => {
  const sql = 'SELECT * FROM Conductor';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener conductores:', err.message);
      res.status(500).send('Error al obtener los datos de conductores');
    } else {
      res.status(200).json(results);
    }
  });
};

const createConductor = (req, res) => {
    const { ID_conductor, nombre_apellido, licencia } = req.body;
  
    if (!ID_conductor || !nombre_apellido || !licencia) {
      return res.status(400).send('Todos los campos son obligatorios.');
    }
  
    const sql = 'INSERT INTO Conductor (ID_conductor, nombre_apellido, licencia) VALUES (?, ?, ?)';
    db.query(sql, [ID_conductor, nombre_apellido, licencia], (err, results) => {
      if (err) {
        console.error('Error al crear conductor:', err.message);
        res.status(500).send('Error al insertar el conductor en la base de datos.');
      } else {
        res.status(201).send('Conductor creado exitosamente.');
      }
    });
  };

module.exports = { getConductores, createConductor };
