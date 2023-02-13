'use strict'
var express = require('express');
// var bodyParser = require('body-parser'); ---> ya lo contiene express

var app = express();

//CARGAR ARCHIVOS DE RUTAS
var projectRoutes = require('./routes/project');

//middlewares: un metodo que se ejecuta antes de ejecutar la accion de un controlador
app.use(express.urlencoded({extended:false}));
app.use(express.json());//Para convertir la data que llege en un json

//CORS

//RUTAS
app.use('/api', projectRoutes)

//Exportar
module.exports =app;