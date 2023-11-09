const exp = require('express');


const route = exp.Router();


const client_route = require('./route/client_route');

const flight_route = require('./route/flight_route');


const book_route = require('./route/book_route');

route.use('/register', client_route);

route.use('/login', client_route);


route.use('/flights', flight_route);


route.use('/booking', book_route);

module.exports = route;
