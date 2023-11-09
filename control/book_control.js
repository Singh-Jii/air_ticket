const book_model = require('../model/book_model');


const book_control = {

  
  booking_flight: async (request, response) => {


    try {

      
      const { clientId, flight_id } = request.body;



      const book = new book_model({


        user: clientId,


        flight: flight_id,


      });

      await book.save();


      response.status(201).json(book);


    } 
    
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },


  get_evry_book_flight: async (request, response) => {


    try {


      const my_book = await book_model.find().populate('user').populate('flight');


      response.status(200).json(my_book);


    } 
    
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },



  chnge_book: async (request, response) => {


    try {


      await book_model.findByIdAndUpdate(request.params.id, request.body);


      response.status(204).send();


    } 
    
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },


  del_book: async (request, response) => {


    try {


      await book_model.findByIdAndDelete(request.params.id);


      response.status(202).send();


    } 
    
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },



};


module.exports = book_control;
