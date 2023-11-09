const flight_model = require('../model/flight_model');


const flight_control = {


  get_evry_flight: async (request, response) => {


    try {

      const my_fly = await flight_model.find();


      response.status(200).json(my_fly);


    } 
    
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },



  get_evry_flight_id: async (request, response) => {


    try {


      const my_fli = await flight_model.findById(request.params.id);


      response.status(200).json(my_fli);


    } 
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },


  plus_flight: async (request, response) => {


    try {


      const my_fli = new flight_model(request.body);


      await my_fli.save();


      response.status(201).json(my_fli);


    } 
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },


  chnge_flight: async (request, response) => {


    try {


      await flight_model.findByIdAndUpdate(request.params.id, request.body);


      response.status(204).send();


    } 
    
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }



  },



  del_flight: async (request, response) => {


    try {


      await flight_model.findByIdAndDelete(request.params.id);


      response.status(202).send();


    } 
    
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },


};


module.exports = flight_control;
