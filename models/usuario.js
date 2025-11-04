const usuarios = [
  { id: 1, nombre: "Luis" },
  { id: 2, nombre: "Ana" }
];

function obtenerUsuarios() {
  return usuarios;
}

module.exports = { obtenerUsuarios };