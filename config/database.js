const { Client } = require("pg");

function Connection() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "FullStack",
    password: "admin",
    port: 5432,
  });
  return client;
}

module.exports = Connection;
