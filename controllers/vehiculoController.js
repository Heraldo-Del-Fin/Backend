const db = require('../config/db');

// Obtener todos los vehículos
const getVehiculos = (req, res) => {
  const sql = 'SELECT * FROM Vehiculo';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener vehículos:', err.message);
      res.status(500).send('Error al obtener los datos de vehículos');
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = { getVehiculos };
