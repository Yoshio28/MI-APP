const modeloUsuario = require("../models/usuario");

function mostrarUsuarios(req, res) {
  const usuarios = modeloUsuario.obtenerUsuarios();
  res.render("index", { usuarios });
}

module.exports = { mostrarUsuarios };