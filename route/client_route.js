const exp = require('express');


const route = exp.Router();


const client_control = require('../control/client_control');


route.post('/register', client_control.my_reg);


route.post('/login', client_control.my_log);


module.exports = route;
