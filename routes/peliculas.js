const { Router } = require('express');
const { getPeliculas } = require('../controllers/peliculas');

const rutas = Router();

rutas.get('/', getPeliculas);

module.exports = rutas;
