const express = require("express");
const cors = require("cors"); // Importa el módulo cors

const app = express();

// Habilita CORS para todas las rutas
app.use(cors());

// Resto de la configuración de tu servidor y definición de rutas

// app.listen(3000, () => {
//   console.log("Servidor escuchando en el puerto 3000");
// });