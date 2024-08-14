const express = require("express");
const Router = require("./routes/index");
const conectarBD = require("./models/db.js");

// arrancar express
const app = express();

// conectando con MongoDB
conectarBD()

app.use(express.json());

// habilitar Rutas
app.use(Router);

// levantar el servidor de Node con express
app.listen(3000, () => {
    console.log("Servidor iniciado en: http://127.0.0.1:3000");
})
