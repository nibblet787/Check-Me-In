const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    name: String,
    flightNum: Number,
    airlineName: String,
    confirmationNum: Number,
    flightDate: String,
    checkInTime: String,
  }, {
    timestamps: true
    }
);

const Flights = mongoose.model('Flights', flightSchema);

module.exports = Flights;
