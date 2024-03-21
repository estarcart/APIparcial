const express = require('express');
const router = express.Router();
const connection = require('../database/db');

// Ruta para obtener items
router.get('/items', (req, res) => {
  connection.query('SELECT * FROM items', (err, results) => {
    if (err) throw err;

    res.json({
      success: true,
      message: 'Items obtenidos exitosamente',
      items: results // Los resultados de la consulta se devuelven como items
    });
  });
});

module.exports = router;
