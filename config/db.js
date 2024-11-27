const mysql = require('mysql2');

// Crear la conexión a la base de datos
const db = mysql.createPool({
  host: 'localhost',       // Servidor de MySQL
  user: 'root',            // Usuario por defecto de XAMPP
  password: '',            // Contraseña, en tu caso es vacía
  database: 'SistemaTransporte' // Nombre de la base de datos
});

// Verificar la conexión
db.getConnection((err, connection) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err.message);
    } else {
      console.log('Conexión exitosa a la base de datos');
      connection.release(); // Liberar la conexión para que otros procesos puedan usarla
    }
  });
  
  module.exports = db;