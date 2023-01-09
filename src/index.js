/**
 * Importing own files
 */
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

/**
 * Importing external dependencies
 */
const chalk = require("chalk");

// Location as a command line input
const ipLocation = process.argv[2];

if (ipLocation !== undefined) {
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
} else {
  console.error(
    chalk.red("Please provide a location as a command line argument...")
  );
}
