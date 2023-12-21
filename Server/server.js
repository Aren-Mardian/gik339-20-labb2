const express = require("express");
const server = express();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

// Importera sqlite3
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./gik339-labb2.db");

const sqlQuery = "SELECT * FROM users";

server.get("/users", (req, res) => {
  db.all(sqlQuery, (err, rows) => {
    // om error är sann 
    if (err) {
      console.error(err);
      res.status(500).send("Nu blev det fel", err);
      return;
    }
    res.send(rows);
  });
});

