const options = require("../dbconfig/MySql");
const knex = require("knex")(options);

knex.schema
  .createTable("productos", table => {
    table.increments("id").notNullable();
    table.string("name").notNullable();
    table.string("thumbnail").notNullable();
    table.integer("price").notNullable();
    table.integer("stock").notNullable();
    table.timestamp("timestamp").defaultTo(knex.fn.now()).notNullable();
  })
  .then(() => {
    console.log("tabla de productos creada!");
  })
  .catch(error => {
    console.log("error:", error);
    throw error;
  })
  .finally(() => {
    console.log("cerrando conexión...");
    process.exit(0);
  });
