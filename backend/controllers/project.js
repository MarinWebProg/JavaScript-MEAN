'use strict'

const project = require('../models/project');
let Project = require('../models/project');
let fs = require('fs');
var path = require('path');

let controller = {

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
        
        let params = req.body;//Son los datos del modelo que le asignamos
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

    },

    //Para subir arcivhos/ficheros
    uploadImage: function(req, res){
		let projectId = req.params.id;
		let fileName = 'Imagen no subida...';
 
		if(req.files){
			let filePath = req.files.image.path;
			let fileSplit = filePath.split('\\');
			let fileName = fileSplit[1];
            let extSplit = fileName.split('\.');
            let fileExt = extSplit[1];
            

            if(fileExt === 'png' || fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'gif'){
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated)=>{
 
                    if(err) return res.status(500).send({message: 'La imagen no se ha subido'});
     
                    if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto para asubir la imagen'});
     
                    return res.status(200).send({
                        project: projectUpdated
                    });
                });

            }else{
                //Es como un borrado ya que se encargara de borrar lo que no pase en el filtro
                fs.unlink(filePath, (err) =>{
                    return res.status(200).send({
                        message: 'La extension no es valida, intente con otro '
                    });
                });
            }
			
		}else{
			return res.status(200).send({
				message: fileName
			});
		}
	},

    //Para obtener la imagen
    getImageFile: function(req,res){
        let file = req.params.image;
        let path_file = './uploads/'+file;
        
        fs.stat(path_file,(error) => {
            if(!error){
                return res.sendFile(path.resolve(path_file))
            }else{
                return res.status(404).send({
                    message: "No existe la imagen"
                })
            }
        });
       
    },




};

module.exports = controller;