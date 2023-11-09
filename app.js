const exp = require('express');


const mongo = require('mongoose');

const my_route = require('./route');


const application = exp();

application.use(exp.json());

mongo.connect('mongodb+srv://lovely:lovely@cluster0.mx8x9dk.mongodb.net/air_ticket?retryWrites=true&w=majority', { 
  

  useNewUrlParser: true, 

  useUnifiedTopology: true 


});


application.use('/api', my_route);

const my_port = process.env.my_port || 3000;


application.listen(my_port, () => {

  console.log(`${my_port}`);

  
});
