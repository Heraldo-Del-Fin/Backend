const db = require('../config/db');

// Obtener todos los consumos de combustible
const getConsumos = (req, res) => {
  const sql = 'SELECT * FROM ConsumoCombustible';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener consumos de combustible:', err.message);
      res.status(500).send('Error al obtener los datos de consumos de combustible');
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = { getConsumos };
