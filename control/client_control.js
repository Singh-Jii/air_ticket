const client_model = require('../model/client_model');


const crypto = require('bcrypt');


const jot = require('jsonwebtoken');


const client_control = {


  my_reg: async (request, response) => {


    try {


      const { name, email, password } = request.body

      const privacy = await crypto.hash(password, 8);


      const client = new client_model({


        name,

        email,


        password: privacy,



      });


      await client.save();


      response.status(201).send();


    } 
    
    
    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },



  my_log: async (request, response) => {


    try {


      const { email, password } = request.body;


      const client = await client_model.findOne({ email });


      if (!client) {


        return response.status(401).json({ er: 'err' });


      }

      const combine_pass = await crypto.compare(password, client.password);


      if (!combine_pass) {


        return response.status(401).json({ er: 'err' });


      }


      const my_tok = jot.sign({ clientId: client._id }, 'your_secret_key');


      response.status(201).json({ my_tok });


    } 
    

    catch (er) {


      console.log(er);


      response.status(500).json({ er: 'err' });


    }


  },


};


module.exports = client_control;
