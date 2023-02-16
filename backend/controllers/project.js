'use strict'

const project = require('../models/project');
var Project = require('../models/project');

var controller = {

    home:function(req,res){
        return res.status(200).send({
            message: 'SOY EL HOME(I AM LA CASA)'
        });
    },

    test: function(req,res){
        return res.status(200).send({
             message: 'SOY EL CONTROLADOR TEST'
        });
    },

    saveProject: function(req,res){
        let project = new Project();
        
        var params = req.body;//Son los datos del modelo que le asignamos
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({
                message: 'Error al guardar :o, hay que checar'
            });

            if(!projectStored) return res.status(404).send({
                message: 'No se ah podido guardar el documento amigo :O'
            });

            // return res.status(200).send({
            //     project: projectStored
            // });
        });

        return res.status(200).send({
            project: project,
            message: 'SOY EL CONTROLADOR savePROJECT'
        });
    },

    //Para encontrar mediante Id 
    getProject: function(req,res){
        let projectID = req.params.id;

        if(projectID ==null) return res.status(404).send({
            message: 'El proyecto no existe padrino :o .'
        });

        Project.findById(projectID, (err, project) =>{
            if(err) return res.status(500).send({
                message: 'Error al devolver el resultado de datos padrino'
            });

            if(!project) return res.status(404).send({
                message: 'No existe el documento padrino :O'
            });

            return res.status(200).send({
                    project
                });

        });
    },

    //Para encontrar/filtar  
    getProjects: function(req,res){
        Project.find({}).exec((err,projects) => {
        //Project.find({year:2023}).exec((err,projects) => { -- para encontrar un dato en especifico
        //Project.find({}).exec((err,projects) => { -- para mostrar toda la coleccion
        //Project.find({}).sort('year' o '-year').exec((err,projects) => { -- para ordenar con un campo(de mayor o menor o viceversa)
            if(err) return res.status(500).send({
                message: 'Error al devolver los datoooos :o'
            });

            
            if(!project) return res.status(404).send({
                message: 'No hay proyectos para mostrar padrino :O'
            });

            return res.status(200).send({
                projects
            });

        });
    },

    updateProject: function(req,res){
       let update = req.body;
       
       //Es un update que busca por un id
       Project.findByIdAndUpdate(req.params.id,update,(err, projectUpdated) => {
        if(err) return res.status(500).send({
            message: 'Error al actualizar :c'
        });

        
        if(!projectUpdated) return res.status(404).send({
            message: 'No existe el proyecto padrino para actualizarlo :C'
        });

        return res.status(200).send({
            project: projectUpdated
        });
       });

    },
    //Para borrar algo en la coleccion
    deleteProject: function(req,res){
        let projectID = req.params.id;

        Project.findByIdAndDelete(projectID,(err,deleteProject) => {
            
            if(err) return res.status(500).send({
                message: 'Error al Borrar el proyecto unu'
            });
    
            
            if(!deleteProject) return res.status(404).send({
                message: 'No se puede eliminar ese proyecto :C'
            });
    
            return res.status(200).send({
                project: deleteProject
            });

        });

    }





};

module.exports = controller;