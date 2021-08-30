const options = require("../dbconfig/SQLite3");
const knex = require("knex")(options);

class MensajesModel {
  async listar() {
    try {
      let mensajes = await knex.from("mensajes").select("*");
      return mensajes;
    } catch (error) {
      throw error;
    }
  }

  async guardar(mensaje) {
    try {
      let mensajes = await knex("mensajes").insert(mensaje);
      return mensajes;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new MensajesModel();
