const db = require('../config/db');

// Obtener todos los vehículos
const getVehiculos = (req, res) => {
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
      res.status(500).send('Error al obtener los datos de vehículos');
    } else {
      res.status(200).json(results);
    }
  });
};


const addVehiculo = (req, res) => {
  const { placa, modelo, marca, anio_fabricacion, capacidad, tipo_combustible } = req.body;

  if (!placa || !modelo || !marca || !anio_fabricacion || !capacidad || !tipo_combustible) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  const sql = 'INSERT INTO Vehiculo (placa, modelo, marca, anio_fabricacion, capacidad, tipo_combustible) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [placa, modelo, marca, anio_fabricacion, capacidad, tipo_combustible], (err, result) => {
    if (err) {
      console.error('Error al agregar vehículo:', err.message);
      res.status(500).send('Error al agregar el vehículo');
    } else {
      res.status(201).json({ message: 'Vehículo agregado exitosamente' });
    }
  });
};

module.exports = { getVehiculos, addVehiculo };

