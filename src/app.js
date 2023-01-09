const path = require("path");
/**
 * Importing external dependencies
 */
const chalk = require("chalk");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

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

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Please provide an address",
    });
  }

  geocode(req.query.address, (err, data) => {
    if (err) {
      return res.send({
        error: err,
      });
    }

    const { latitude, longitude, location } = data;
    forecast(latitude, longitude, (err, data) => {
      if (err) {
        return res.send({
          error: err,
        });
      }

      res.send({
        location,
        forecast: data,
      });
    });
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "About Me",
    name: "Shreya Sur",
  });
});

app.get("/help", (req, res) => {
  res.render("help.hbs", {
    title: "Help",
    helpText: "This is an example message.",
    name: "Shreya Sur",
  });
});

app.get("*", (req, res) => {
  res.render("404.hbs", {
    title: "404",
    errorMsg: "Page not found",
    name: "Shreya Sur",
  });
});

app.listen(port, () => {
  console.log(`Server listening to PORT ${chalk.yellow(port)}...`);
});
