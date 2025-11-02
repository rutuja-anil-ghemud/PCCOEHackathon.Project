const express = require('express');
const router = express.Router();
const { getWeatherByLocation, getNationalSummary } = require('../controllers/weatherController');

router.get('/location', getWeatherByLocation);
router.get('/summary', getNationalSummary);

module.exports = router;
