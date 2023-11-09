const exp = require('express');


const route = exp.Router();


const book_control = require('../control/book_control');

route.post('/booking', book_control.booking_flight);


route.get('/dashboard', book_control.get_evry_book_flight);

route.patch('/dashboard/:id', book_control.chnge_book);


route.delete('/dashboard/:id', book_control.del_book);


module.exports = route;
