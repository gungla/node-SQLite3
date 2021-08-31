const ProductosModel = require("../persistencia/productos");

class Productos {

  async listar() {
    const productos = await ProductosModel.listar();
    console.log('Listo productos');
    return productos;
  }

  async listarId(id) {
    const product = await ProductosModel.listarId(id);
    console.log('Producto por ID');
    return product;
  }

  async guardar(body) {
    if (body.name && body.price && body.stock && body.thumbnail) {
      const product = await ProductosModel.guardar(body);
      console.log('Guardo producto');
      return product;
    } else return;
  }

  async actualizar(id, body) {
    let productExists = await this.listarId(id);

    if (productExists) {
      const newProduct = Object.assign(productExists[0], body);
      const product = await ProductosModel.actualizar(id, newProduct);
      return newProduct;
    } else return;
  }

  async borrar(id) {
    let productExists = this.listarId(id);

    if (productExists) {
      console.log('Borro producto');
      const product = await ProductosModel.borrar(id)
      return productExists;
    } else return;
  }
}

module.exports = new Productos();
