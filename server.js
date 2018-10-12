const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
require('dotenv').config()
const session = require('express-session')
// const flightDB = require('./models/flightDB.js');
const Flights = require('./models/flights.js');
const bcrypt = require('bcrypt');

// This should work...but doesn't??
// const USER = process.env.USER
// const PASS = process.env.PASS
// const uri = 'mongodb://' + USER + ':' + PASS + '@ds129823.mlab.com:29823/check-me-in';

//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/' + 'check-me-in' || 'mongodb://heroku_r11kq3z2:s380d43fii3b8s529n82408srh@ds129233.mlab.com:29233/heroku_r11kq3z2' || process.env.MONGODB_URI;
// const MONGODB_URI = 'mongodb://heroku_r11kq3z2:s380d43fii3b8s529n82408srh@ds129233.mlab.com:29233/heroku_r11kq3z2'



// Connect to Mongo
const uri = 'mongodb://blah:blah787@ds129823.mlab.com:29823/check-me-in';


mongoose.connect(uri, {useNewUrlParser: true});
mongoose.connect(MONGODB_URI , {useNewUrlParser: true});
// mongoose.connect('mongo://mlab.uri',
//   {
//     username: process.env.USER,
//     password: process.env.PASS
//   }
// )

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

//___________________
// Controllers
//___________________
const flightsController = require('./controllers/flights.js');
app.use('/flights', flightsController);

//___________________
// Routes -- RELOCATED TO FLIGHTS.JS
//___________________
// app.get('/' , (req, res) => {
//   // res.send('It\'s a-me, Ricky-o' );
//   res.render('index.ejs', {
//     flight: Flights[req.body]
//   })
// });

// app.get('/', (req, res) => {
//     Flights.find({}, (error, allFlights) => {
//         res.render('index.ejs', {
//             flight: allFlights
//           })
//         })
// })
//___________________
// Seed
//___________________
// Flights.create( flightDB, ( err , data ) => {
//       if ( err ) console.log ( err.message )
//   console.log( "added provided flight data" )
//   }
// );
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
//
