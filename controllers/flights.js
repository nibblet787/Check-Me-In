const express = require('express');
const flights = express.Router();
const Flights = require('../models/flights.js');
const flightDB = require('../models/flightDB.js');

//___________________
// Routes
//___________________
//
// flights.get('/', (req, res) => {
//     Flights.find({}, (error, allFlights) => {
//         res.render('index.ejs', {
//             flight: allFlights
//           })
//         })
// })

flights.get('/new', (req, res) => {
  res.render('new.ejs');
})

flights.delete('/:id', (req, res) => {
  Flight.findByIdAndRemove(req.params.id, (req, data) => {
    res.redirect('/flights');
  })
})

flights.get('/:id/edit', (req, res) => {
  Flights.findById(req.params.id, (err, locateFlights) => {
    res.render('edit.ejs', {
      flight: locateFlights
    });
  })
})

flights.put('/:id', (req, res) => {
  Flights.findByIdAndUpdate(req.params.id, {new: true}, (err, updateModel) => {
    res.redirect('/flights');
  })
})

flights.post('/', (req, res) => {
  Flights.create(req.body, (err, createdFlights) => {
    res.redirect('/flights');
  })
})

flights.get('/:id', (req, res) => {
  Flights.findById(req.params.id, (err, locateFlights) => {
    res.render('show.ejs', {
      flight: locateFlights
    });
  })
})


















module.exports = flights;
