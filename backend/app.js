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
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS
app.use('/api', projectRoutes)

//Exportar
module.exports =app;