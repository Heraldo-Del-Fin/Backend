// authMiddleware.js
const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  // Credenciales estáticas para el administrador
  const adminCredentials = {
    username: 'admin',
    password: 'admin123',
  };

  if (username === adminCredentials.username && password === adminCredentials.password) {
    next(); // Si las credenciales son correctas, continuar con la solicitud
  } else {
    res.status(401).json({ message: 'Credenciales inválidas. Acceso denegado.' });
  }
};

module.exports = authMiddleware;
  