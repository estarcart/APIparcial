const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware para verificar el token en las solicitudes protegidas
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'Token no proporcionado'
    });
  }

  jwt.verify(token, 'tu_secreto_secreto', (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido'
      });
    }
    req.decoded = decoded;
    next();
  });
}

// Ruta protegida de ejemplo
router.get('/protected', verifyToken, (req, res) => {
  res.json({
    success: true,
    message: 'Ruta protegida alcanzada',
    username: req.decoded.username
  });
});

module.exports = router;
