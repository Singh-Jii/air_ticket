const exp = require('express');


const route = exp.Router();


const flight_control = require('../control/flight_control');


route.get('/', flight_control.get_evry_flight);


route.get('/:id', flight_control.get_evry_flight_id);


route.post('/', flight_control.plus_flight);


route.put('/:id', flight_control.chnge_flight);


route.delete('/:id', flight_control.del_flight);


module.exports = route;
