const mongo = require('mongoose');


const book_schema = new mongo.Schema({


  user: { 
    
    type: mongo.Schema.Types.ObjectId, 
    
    
    ref: 'User' 
  
  
  },


  flight: { 
    
    type: mongo.Schema.Types.ObjectId, 
    
    ref: 'Flight' 
  
  
  },


});


const book_model = mongo.model('Booking', book_schema);


module.exports = book_model;
