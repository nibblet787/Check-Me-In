const express = require('express');
const flights = express.Router();
const Flights = require('../models/flights.js');

//___________________
// Routes
//___________________
//localhost:3000
flights.get('/' , (req, res) => {
  res.render('index.ejs');
});































module.exports = flights;
