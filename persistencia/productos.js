const options = require("../dbconfig/MySql");
const knex = require("knex")(options);

class ProductosModel {
  async listar() {
    try {
      let productos = await knex.from("productos").select("*");
      return productos;
    } catch (error) {
      throw error;
    }
  }

  async listarId(id) {
    try {
      let producto = await knex("productos").select("*").where("id", "=", id);
      return producto;
    } catch (error) {
      throw error;
    }
  }

  async guardar(body) {
    try {
      let producto = await knex("productos").insert(body);
      return producto;
    } catch (error) {
      throw error;
    }
  }

  async actualizar(id, newProduct) {
      try {
          let producto = await knex("productos").where("id", "=", id).update(newProduct)
          return producto;
      } catch (error) {
         throw error;
      }
  }

  async borrar(id) {
      try {
          let product = await knex.from('productos').where("id", "=", id).del()
      } catch (error) {
         throw error;
      }
  }
}

module.exports = new ProductosModel();
