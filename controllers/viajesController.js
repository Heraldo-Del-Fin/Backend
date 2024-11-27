const db = require('../config/db');

// Obtener todos los viajes
const getViajes = (req, res) => {
  const sql = 'SELECT * FROM Viaje';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener viajes:', err.message);
      res.status(500).send('Error al obtener los datos');
    } else {
      res.status(200).json(results);
    }
  });
};

// Crear un nuevo viaje
const createViaje = (req, res) => {
  const { fecha_inicio, fecha_fin, destino, km_recorridos, tipo_carga, num_pasajeros, ID_conductor, placa } = req.body;

  // Verificar que todos los campos estén presentes
  if (!fecha_inicio || !fecha_fin || !destino || !km_recorridos || !ID_conductor || !placa) {
    return res.status(400).send('Todos los campos obligatorios deben estar presentes');
  }

  const sql = `INSERT INTO Viaje (fecha_inicio, fecha_fin, destino, km_recorridos, tipo_carga, num_pasajeros, ID_conductor, placa) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [fecha_inicio, fecha_fin, destino, km_recorridos, tipo_carga, num_pasajeros, ID_conductor, placa];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al crear el viaje:', err.message);
      res.status(500).send('Error al insertar el viaje');
    } else {
      res.status(201).send('Viaje creado exitosamente');
    }
  });
};

module.exports = { getViajes, createViaje };
