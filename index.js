const express = require('express');
const app = express();
const port = 3000;

// Ruta básica para el API
app.get('/', (req, res) => {
  res.send('Hola Mundo soy MIA');
});

// Escuchar el puerto 3000
app.listen(port, () => {
  console.log(`La API está corriendo en http://localhost:${port}`);
});
