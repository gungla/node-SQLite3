const options = require("../dbconfig/SQLite3");
const knex = require("knex")(options);

knex.schema
  .createTable("mensajes", table => {
    table.string("email").notNullable();
    table.string("mensaje").notNullable();
    table.timestamp("fecha").defaultTo(knex.fn.now()).notNullable();
  })
  .then(() => {
    console.log("tabla de mensajes creada!");
  })
  .catch(error => {
    console.log("error:", error);
    throw error;
  })
  .finally(() => {
    console.log("cerrando conexión...");
    process.exit(0);
  });
