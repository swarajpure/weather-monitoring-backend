const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.listen((PORT) => {
  console.log(`Server running on PORT ${port}`);
})