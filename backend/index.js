'use strict'
var mongoose = require('mongoose');
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
.then(() =>{
    console.log("Conexion exitosa :D, fieeeesta")
}).catch(err => console.log(err,"NO SE CONECTOO :C"));