const express = require("express");
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});



module.exports = app;
