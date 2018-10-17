const express = require('express');
// const users = express.Router()

const sessions = express.Router()
// const User = require('../models/users.js');
const flights = express.Router();
const Flights = require('../models/flights.js');
// const flightDB = require('../models/flightDB.js');
const methodOverride  = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;
require('dotenv').config()
const session = require('express-session')
const bcrypt = require('bcrypt');

// users.get('/new', (req, res) => {
//   res.render('users/new.ejs')
// })

// flights.post('/', (req, res) => {
//   console.log('before bcrypt', req.body.password);
//   req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
//   Flights.create(req.body, (err, createdUser) => {
//     if(err) {
//       console.log(err);
//     } console.log(createdUser);
//     res.redirect('/')
//   })
// })

// users.put('/', (req, res) => {
//   User.create(req.body, (err, createdFlights) => {
//     res.redirect('/');
//   })
// })

// users.get('/:id', (req, res) => {
//   User.findById(req.params.id, (err, locateUser) => {
//     res.render('users/new.ejs', {
//       user: locateUser
//     });
//   })
// })

// users.put('/:id', (req, res) => {
//   User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
//     res.redirect('/' + req.params.id);
//   })
// })





module.exports = users
