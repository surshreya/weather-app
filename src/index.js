/**
 * Importing own files
 */
const { geocode } = require("./utils/geocode");

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
  console.log(latitude, longitude, location);
});
