const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('../database/db');

// Ruta de inicio de sesión
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verificar las credenciales en la base de datos
  connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      // Si las credenciales son válidas, generar un token JWT con expiración de 7 días
      const token = jwt.sign({ username: username }, 'tu_secreto_secreto', { expiresIn: '7d' });

      res.json({
        success: true,
        message: 'Inicio de sesión exitoso',
        token: token
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Credenciales inválidas'
      });
    }
  });
});

module.exports = router;
