/**
 * Importing own files
 */
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

/**
 * Importing external dependencies
 */
const chalk = require("chalk");

geocode("Boston", (err, data) => {
  if (err) {
    console.error(chalk.red.bold(err));
    return;
  }

  const { latitude, longitude, location } = data;
  forecast(latitude, longitude, (err, data) => {
    if (err) {
      console.error(chalk.red.bold(err));
      return;
    }

    console.log("Location: ", chalk.yellow(location));
    console.log(data);
  });
});
