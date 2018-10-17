const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  username: {type: String},
  password: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    flightNum: {type: Number},
    airlineName: {type: String},
    confirmationNum: {type: Number},
    flightDate: {type: String},
    checkInTime: {type: String},
  }, {
    timestamps: true
    }
);

const Flights = mongoose.model('Flights', flightSchema);

module.exports = Flights;
