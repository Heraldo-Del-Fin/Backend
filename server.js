const express = require("express");
const cors = require("cors");
require("dotenv").config(); //para manejar variables de entorno en un archivo .env

const app = express();
const db = require('./config/db'); // Importa la configuración de la base de datos


// Importar rutas
const viajesRoutes = require('./routes/viajes');
const conductorRoutes = require('./routes/conductor');
const vehiculoRoutes = require('./routes/vehiculo');
const mantenimientoRoutes = require('./routes/mantenimiento');
const consumoRoutes = require('./routes/consumocombustible');

// Registrar rutas
app.use('/api/viajes', viajesRoutes);
app.use('/api/conductores', conductorRoutes);
app.use('/api/vehiculos', vehiculoRoutes);
app.use('/api/mantenimientos', mantenimientoRoutes);

app.use('/api/consumos', consumoRoutes);
// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack); // Imprimir el error en el servidor
  res.status(err.status || 500).json({ message: err.message || 'Error interno del servidor' });
});


app.get('/test-db', (req, res) => {
    db.query('SHOW TABLES', (err, results) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err.message);
        res.status(500).send('Error al conectar con la base de datos');
      } else {
        res.status(200).json(results); // Devolver las tablas existentes
      }
    });
  });
  


//middlewares
app.use(cors());
app.use(express.json()); // Permitir lectura de datos en formato JSON
app.use(express.urlencoded({ extended: true })); // Para leer datos de formularios

// Ruta base (para verificar que el servidor está funcionando)
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Puerto donde escuchará el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

