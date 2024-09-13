const axios = require('axios');
const {request, response} = require('express');


const getEmpleados = (req = request, res = response) => {

  const { lastname, ...rest } = req.query; //query params (del signo de preguta para la derecha)
  //console.log('lastanem:', lastname);
  //console.log('rest:', rest);

  const filtro = (lastname) ? `?lastname=${lastname}` : '';

    axios.get(`https://66d9de7f4ad2f6b8ed564dbf.mockapi.io/Empleados${filtro}`) 
    .then( (response) => {
      const { data } = response;
      // handle success

      res.status(200).json({
        msg: 'Ok',
        data
      });
    })
    .catch( (error) => {
      // handle error
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error
      });
    });
}



const getEmpleado = (req = request, res = response) => {
  
  const { idEmpleado } = req.params; //params (del signo de pregunta para la izquierda)
  console.log(idEmpleado);
 
 
 
  axios.get(`https://66d9de7f4ad2f6b8ed564dbf.mockapi.io/Empleados/${idEmpleado}`)
  .then( (response) => {
    const { data } = response;

    const newArray = data.filter(item => item.id === idEmpleado);

    // handle success    
    res.status(200).json({
      msg: 'Ok',
      data
    });
  })
  .catch( (error) => {
    // handle error
    console.log(error);
    res.status(400).json({
      msg: 'Error',
      error
    });
  });
}


  module.exports = {
  getEmpleados,
  getEmpleado
}
