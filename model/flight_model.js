const mongo = require('mongoose');

const flight_schema = new mongo.Schema({


  airline: String,

  flightNo: String,

  departure: String,


  arrival: String,

  departureTime: Date,


  arrivalTime: Date,

  seats: Number,


  price: Number,

});


const flight_model = mongo.model('Flight', flight_schema);


module.exports = flight_model;
