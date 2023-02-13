'use strict'

var express = require('express');
var projectController = require('../controllers/project');

var route = express.Router();

//Rutas
route.get('/home', projectController.home);
route.post('/test', projectController.test);
route.post('/save-project', projectController.saveProject);
route.GET('/project/:id?', projectController.saveProject);

module.exports = route;