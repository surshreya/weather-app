/**
 * Importing own files
 */
const { GEOCODE_URL } = require("../config");

/**
 * Importing external dependencies
 */
const request = require("request");

const geocode = (address, callback) => {
  const url = GEOCODE_URL(address);
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback(err.message);
      return;
    }

    if (body.message) {
      callback(body.message);
      return;
    }

    if (body.features.length === 0) {
      callback("Unable to find location...");
      return;
    } else {
      const data = body.features[0];
      const [lng, lat] = data.center;
      callback(undefined, {
        latitude: lat,
        longitude: lng,
        location: data.place_name,
      });
    }
  });
};

module.exports = geocode;
