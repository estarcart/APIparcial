const app = require('./app');
const port = 3000;
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor API en ejecución en http://localhost:${port}`);
});
