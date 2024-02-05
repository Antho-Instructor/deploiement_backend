const express = require("express");

const database = require("./database/config");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/items", async (req, res) => {
  const [rows] = await database.query("select * from item");

  res.json(rows);
});

module.exports = app;
