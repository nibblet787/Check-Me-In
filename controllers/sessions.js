// const User = require('../models/users.js');
const express = require('express');
const sessions = express.Router()
const flights = express.Router();
const Flights = require('../models/flights.js');
// const flightDB = require('../models/flightDB.js');
const methodOverride  = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;
require('dotenv').config()
const session = require('express-session')
const bcrypt = require('bcrypt');

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
})

sessions.post('/', (req, res)=>{
    Flights.findOne({ username: req.body.username }, (err, foundUser) => {
        if(bcrypt.compareSync(req.body.password, foundUser.password)) {
          req.session.currentUser = foundUser
            res.redirect('/')
        } else {
          res.send('<a href="/">wrong password</a>')
        }
    });
});

sessions.get('/destroy-route', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions
