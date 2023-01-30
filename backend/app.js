'use strict'
var express = require('express');
// var bodyParser = require('body-parser'); ---> ya lo contiene express

var app = express();

//CARGAR ARCHIVOS DE RUTAS

//middlewares: un metodo que se ejecuta antes de ejecutar la accion de un controlador
app.use(express.urlencoded({extended:false}));
app.use(express.json());//Para convertir la data que llege en un json

//CORS

//RUTAS
// app.get('/test',(req, res) =>{
//     res.status(200).send("<h2>Pagina de inicio</h2>");
// });

// app.post('/test/:id', function(req,res){
//     res.setHeader('Content-Type', 'text/plain; charset=utf-8');
//     console.log("Request/Body : "+req.body.nombre);
//     console.log("Request/Query : "+req.query.web);
//     console.log("Request/Params : "+req.params.id);
//     res.status(200).send({
//         message:'Hola mundo desde mi API REST en NodeJS'
//     });
// });

//Exportar
module.exports =app;