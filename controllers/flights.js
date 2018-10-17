const express = require('express');
const flights = express.Router();
// const users = express.Router()
// const User = require('../models/users.js');
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
flights.get('/', (req, res) => {
    Flights.find({}, (error, allFlights) => {
        res.render('index.ejs', {
            currentUser: req.session.currentUser
          })
        })
})

// LISTINGS CREATION PAGE -------------
flights.get('/:id/new', (req, res) => {
  res.render('new.ejs', {
    currentUser: req.session.currentUser
    // user: req.params.id
  });
})

// DELETE LISTING ----------------
flights.delete('/:id', (req, res) => {
  Flights.findByIdAndRemove(req.params.id, (req, data) => {
    res.redirect('/destroy-route');
  })
})
// flights.put('/:id/delete', (req, res) => {
//   Flights.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
//     res.redirect('/' + req.params.id);
//   })
// })
// flights.delete('/:id', (req, res) => {
//   flights.splice(req.session.currentUser, 7, 6);
//   res.redirect('/flights');
// });

// EDIT LISTING --------------
flights.get('/:id/edit', (req, res) => {
  Flights.findById(req.params.id, (err, locateFlights) => {
    res.render('edit.ejs', {
      currentUser: req.session.currentUser
    });
  })
})

// APPLY LISTINGS EDITS ---------------
flights.put('/:id', (req, res) => {
  Flights.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
    res.redirect('/' + req.params.id);
  })
})

// APPLY NEW LISTINGS TO INDEX PAGE --------------------
// flights.post('/', (req, res) => {
//   Flights.create(req.body, (err, createdFlights) => {
//     res.redirect('/');
//   })
// })
flights.get('/new', (req, res) => {
  res.render('flights/new.ejs')
})

// DISPLAY LISTING DETAILS --------------------
flights.get('/:id', (req, res) => {
  // Flights.findById(req.params.id, (err, locateFlights) => {
    res.render('show.ejs', {
      currentUser: req.session.currentUser
    });
  // })
})

flights.post('/', (req, res) => {
  console.log('before bcrypt', req.body.password);
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Flights.create(req.body, (err, createdUser) => {
    if(err) {
      console.log(err);
    } console.log(createdUser);
    res.redirect('/')
  })
})















module.exports = flights;
