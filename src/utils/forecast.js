/**
 * Importing own files
 */
const { WEATHER_STACK_URL } = require("../config");

/**
 * Importing external dependencies
 */
const chalk = require("chalk");
const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `${WEATHER_STACK_URL}${latitude},${longitude}&units=m`;
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback(err.message);
      return;
    }

    if (body.error) {
      callback(body.error.info);
      return;
    } else {
      const { current: data } = body;
      const forecast = `${chalk.yellow(
        data.weather_descriptions
      )}. It is currently ${chalk.yellow(
        data.observation_time
      )} and ${chalk.yellow(
        data.temperature + "°C"
      )} out. It feels like ${chalk.yellow(data.feelslike + "°C")} out.`;
      callback(undefined, forecast);
    }
  });
};

module.exports = forecast;
