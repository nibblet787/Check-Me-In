const express = require('express');
const flights = express.Router();
const Flights = require('../models/flights.js');
// const flightDB = require('../models/flightDB.js');
const methodOverride  = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;
require('dotenv').config()
const session = require('express-session')
const bcrypt = require('bcrypt');

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

// LISTINGS CREATION PAGE -------------
flights.get('/new', (req, res) => {
  res.render('new.ejs');
})

// DELETE LISTING ----------------
flights.delete('/:id', (req, res) => {
  Flights.findByIdAndRemove(req.params.id, (req, data) => {
    res.redirect('/');
  })
})

// EDIT LISTING --------------
flights.get('/:id/edit', (req, res) => {
  Flights.findById(req.params.id, (err, locateFlights) => {
    res.render('edit.ejs', {
      flight: locateFlights
    });
  })
})

// APPLY LISTINGS EDITS ---------------
flights.put('/:id', (req, res) => {
  Flights.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
    res.redirect('/flights/' + req.params.id);
  })
})

// APPLY NEW LISTINGS TO INDEX PAGE --------------------
flights.post('/', (req, res) => {
  Flights.create(req.body, (err, createdFlights) => {
    res.redirect('/');
  })
})

// DISPLAY LISTING DETAILS --------------------
flights.get('/:id', (req, res) => {
  Flights.findById(req.params.id, (err, locateFlights) => {
    res.render('show.ejs', {
      flight: locateFlights
    });
  })
})


















module.exports = flights;
