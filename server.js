const express = require('express');
const cors = require('cors');
const weatherRouter = require('./routes/weather');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/weather', weatherRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
})