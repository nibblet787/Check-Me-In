const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    flightNum: {type: Number, required: true},
    airlineName: {type: String, required: true},
    confirmationNum: {type: Number, required: true},
    flightDate: {type: String, required: true},
    checkInTime: {type: String, required: true},
  }, {
    timestamps: true
    }
);

const Flights = mongoose.model('Flights', flightSchema);

module.exports = Flights;
