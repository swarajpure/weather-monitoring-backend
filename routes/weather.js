const express = require('express');
const { getWeatherDetails } = require('../controllers/weather');

const router = express.Router();

router.get('/', getWeatherDetails);

module.exports = router;
