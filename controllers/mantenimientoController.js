const db = require('../config/db');

// Obtener todos los mantenimientos
const getMantenimientos = (req, res) => {
  const sql = 'SELECT * FROM Mantenimiento';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener mantenimientos:', err.message);
      res.status(500).send('Error al obtener los datos de mantenimientos');
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = { getMantenimientos };
