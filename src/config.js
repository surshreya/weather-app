const accessKey = process.env.WEATHER_STACK_KEY;
const accessToken = process.env.MAP_BOX_KEY;

const WEATHER_STACK_URL = `http://api.weatherstack.com/current?access_key=${accessKey}&query=`;

const GEOCODE_URL = (addr) => {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    addr
  )}.json?access_token=${accessToken}`;
};

module.exports = {
  WEATHER_STACK_URL,
  GEOCODE_URL,
};
