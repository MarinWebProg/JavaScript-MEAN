'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;



mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
.then(() =>{
    console.log("Conexion exitosa :D, fieeeesta")
    //Creacion del servidor
    app.listen(port, () => {
        console.log("Se conecto al servidor :D en la url: localhost:3700")
    });

}).catch(err => console.log(err,"NO SE CONECTOO :C"));