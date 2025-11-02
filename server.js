//const express = require('express');
const express = require('express'); // or whatever your app needs

const cors = require('cors');
const dotenv = require('dotenv');
//const weatherRoutes = require('./routes/weatherRoutes');
//const weatherRoutes = require('./routes/weatherRoutes');
//const weatherRoutes = require('./routes/routes');
const weatherRoutes = require('./routes');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
