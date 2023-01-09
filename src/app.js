/**
 * Importing external dependencies
 */
const chalk = require("chalk");
const express = require("express");

const app = express();

const port = process.env.PORT;

app.get("", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("Hello world");
});

app.get("/help", (req, res) => {
  res.send("Hello world");
});

app.get("/weather", (req, res) => {
  res.send("Hello world");
});

app.get("*", (req, res) => {
  res.send("Error");
});

app.listen(port, () => {
  console.log(`Server listening to PORT ${chalk.yellow(port)}...`);
});
