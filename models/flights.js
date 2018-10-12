const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    name: String,
    flightNum: Number,
    airlineName: String,
    confirmationNum: Number,
    checkInTime: Date
});

const Flights = mongoose.model('Flights', flightSchema);

module.exports = Flights;
