const mongo = require('mongoose');


require('dotenv').config();


const { link } = process.env;

mongo.connect(link, {


  useNewUrlParser: true,

  useUnifiedTopology: true,


});


const my_database = mongo.connection;


my_database.on('err', (er) => {


  console.log('mongodb does not connected:-', er);


});


my_database.once('open', () => {


  console.log('mongodb connected');


});
