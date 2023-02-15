'use strict'

var express = require('express');
var projectController = require('../controllers/project');

var route = express.Router();

//Rutas
route.get('/home', projectController.home);
route.post('/test', projectController.test);
route.post('/save-project', projectController.saveProject);// Para guardar nuevo documento
route.get('/project/:id?', projectController.getProject); //Para encontrar por id
route.get('/projects/', projectController.getProjects); //Para encontrar mediante paramtros
route.put('/project/:id', projectController.updateProject);//Para actualizar

module.exports = route;