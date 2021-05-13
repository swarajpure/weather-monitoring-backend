const { fetchWeatherDetails } = require('../models/weather');

const getWeatherDetails = async (_req, res) => {
  try {
    const weatherDetails = await fetchWeatherDetails();
    return res.json(weatherDetails);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = { getWeatherDetails };
