const mongo = require('mongoose');


const client_schema = new mongo.Schema({


  name: String,

  email: String,


  password: String,


});


const client_model = mongo.model('User', client_schema);


module.exports = client_model;
