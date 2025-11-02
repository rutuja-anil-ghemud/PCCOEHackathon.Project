const axios = require('axios');

const getWeatherByLocation = async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

const getNationalSummary = async (req, res) => {
  // Example: Fetch weather for major cities and classify zones
  const cities = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Bangalore'];
  const results = [];

  for (const city of cities) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
      const temp = response.data.main.temp;
      const zone = temp > 35 ? 'Red' : temp > 30 ? 'Yellow' : 'Green';
      results.push({ city, zone });
    } catch (error) {
      results.push({ city, zone: 'Unknown' });
    }
  }

  res.json(results);
};

module.exports = { getWeatherByLocation, getNationalSummary };
