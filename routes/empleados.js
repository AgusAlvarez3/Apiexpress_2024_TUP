const { Router } = require('express'); //'Router' (funcion/metodo propia de express)
const { getEmpleados, getEmpleado } = require('../controllers/empleados'); 

const rutas = Router(); //se llama directamente al metodo 

rutas.get('/', getEmpleados); // siempre dos valores. Uno de ruta y otro el metodo creado en el controlador
rutas.get('/:idEmpleado', getEmpleado);

module.exports = rutas; //aca solo se exportan las rutas