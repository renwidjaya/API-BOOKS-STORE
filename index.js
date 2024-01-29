const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3000;

// Import routes here
const bookRoute = require("./routes/book-route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your route here
app.use("/api/v1/book", bookRoute);

app.get('/', (req, res) => {
  res.json('Okay')
});

app.listen(
  port,
  () => {
    console.log("Running on port " + port)
  }
);