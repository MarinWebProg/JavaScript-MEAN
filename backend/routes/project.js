'use strict'

var express = require('express');
var projectController = require('../controllers/project');

var route = express.Router();

//middleware
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart({uploadDir: './uploads'})

//Rutas
route.get('/home', projectController.home);
route.post('/test', projectController.test);
route.post('/save-project', projectController.saveProject);// Para guardar nuevo documento
route.get('/project/:id?', projectController.getProject); //Para encontrar por id
route.get('/projects/', projectController.getProjects); //Para encontrar mediante paramtros
route.put('/project/:id', projectController.updateProject);//Para actualizar
route.delete('/project/:id', projectController.deleteProject);//Para borrar 

//Nueva ruta para la imagen
route.post('/upload-image/:id',multipartMiddleware,projectController.uploadImage);

module.exports = route;