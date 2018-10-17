const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
require('dotenv').config()
const session = require('express-session')
// const flightDB = require('./models/flightDB.js');
const Flights = require('./models/flights.js');
// const User = require('./models/users.js');
const bcrypt = require('bcrypt');

// This should work...but doesn't??
// const USER = process.env.USER
// const PASS = process.env.PASS
// const uri = 'mongodb://' + USER + ':' + PASS + '@ds129823.mlab.com:29823/check-me-in';

app.use(session({
  secret: 'feedmeseymour',
  resave: false,
  saveUninitialized: false
}))

//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/' + 'check-me-in' || 'mongodb://heroku_r11kq3z2:s380d43fii3b8s529n82408srh@ds129233.mlab.com:29233/heroku_r11kq3z2' || process.env.MONGODB_URI;
// const MONGODB_URI = 'mongodb://heroku_r11kq3z2:s380d43fii3b8s529n82408srh@ds129233.mlab.com:29233/heroku_r11kq3z2'


app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
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


//___________________
// Controllers
//___________________
const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)
// const userController = require('./controllers/users.js')
// app.use('/users', userController)
const flightsController = require('./controllers/flights.js');
app.use('/flights', flightsController);

//___________________
// Routes
//___________________

app.get('/', (req, res) => {
  if(req.session.currentUser) {
  res.render('index.ejs'
  , {
      currentUser: req.session.currentUser
      // user: User
  })
} else {
  // res.redirect('/sessions/new');
  res.render('./flights/index.ejs')
}
});
// app.get('/', (req, res) => {
//   res.render('/sessions')

app.get('/:id', (req, res) => {
  res.render('index.ejs', {
      currentUser: req.session.currentUser
  })
});

app.get('/destroy-route', (req, res)=>{
	req.session.destroy();
  // res.redirect('/');
  res.render('./flights/index.ejs')
});

// app.get('/', (req, res)=>{
//     if(req.session.currentUser){
//         res.render('/index.ejs')
//     } else {
//         res.redirect('/sessions/new');
//     }
// })

<<<<<<< HEAD
=======
// app.get('/', (req, res)=>{
//     if(req.session.currentUser){
//         res.render('show.ejs')
//     } else {
//         // res.redirect('/flights');
//         res.render('index.ejs');
//     }
// })

>>>>>>> ed74a294e35cc95441a1c7e5a67856122aff409f
// app.get('/' , (req, res) => {
//   // res.send('It\'s a-me, Ricky-o' );
//   res.render('index.ejs', {
//     flight: Flights[req.body]
//   })
// });

<<<<<<< HEAD
// app.get('/', (req, res) => {
//     Flights.find({}, (error, allFlights) => {
//         res.render('index.ejs', {
//             // flight: allFlights
//             currentUser: req.session.currentUser
//           })
//         })
// })
=======
app.get('/', (req, res) => {
    Flights.find({}, (error, allFlights) => {
        res.render('index.ejs', {
            flight: allFlights
          })
        })
})
>>>>>>> ed74a294e35cc95441a1c7e5a67856122aff409f


// app.put('/:id', (req, res) => {
//   Flights.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
//     res.redirect('/flights/:id');
//   })
// })

// app.put('/flights/:id', (req, res))

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
