const express = require("express");
const app = express();
const usuarioController = require("./controllers/usuarioController");

app.set("view engine", "ejs");

app.get("/", usuarioController.mostrarUsuarios);

app.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchando en puerto 3000");
});