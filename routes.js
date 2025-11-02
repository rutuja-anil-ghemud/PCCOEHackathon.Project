/*const express = require('express');
const router = express.Router();
const { getWeatherByLocation, getNationalSummary } = require('../controllers/weatherController');

router.get('/location', getWeatherByLocation);
router.get('/summary', getNationalSummary);

module.exports = router;*/
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Weather API is working!' });
});

module.exports = router;

