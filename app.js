// Importar los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware para analizar cuerpos de solicitud JSON
app.use(bodyParser.json());

// Importar rutas
const loginRoute = require('./src/routes/login');
const protectedRoute = require('./src/middleware/protected');
const itemsRoute = require('./src/routes/items');

// Usar las rutas
app.use('/', loginRoute);
app.use('/', protectedRoute);
app.use('/', itemsRoute);

module.exports = app;