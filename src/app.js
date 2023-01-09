const path = require("path");
/**
 * Importing external dependencies
 */
const chalk = require("chalk");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Define paths for express configuration
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Set up view engine and views path
app.set("view-engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Serves the static assets
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index.hbs", {
    title: "Weather App",
    name: "Shreya Sur",
  });
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
