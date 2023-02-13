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

    getProject: function(req,res){
        let projectID = req.params.id;

        Project.findById(projectID, (err, project) =>{
            if(err) return res.status(500).send({
                message: 'Error al devolver el resultado padrino'
            });

            if(!projectStored) return res.status(404).send({
                message: 'No existe el documento padrino :O'
            });

            // return res.status(200).send({
            //         project: 
            //     });

        });
    }

};

module.exports = controller;