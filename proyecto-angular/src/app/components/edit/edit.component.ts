import { Component, OnInit} from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from 'src/app/services/upload.service';

import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create-projects/create-projects.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})

export class EditComponent implements OnInit{
  public title: string;
  public project!: Project;
  public save_project!: any;
  public status!: string;
  public filesToUpload!: Array<File>;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router : Router,
    private _route : ActivatedRoute,
    ) {
      this.title = "Editar Proyecto"
      this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id']; //Se define como tipo array el dato
      this.getProject(id);
    });
  }

  //Para mandar a llamar a los proyectos
  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      (response) =>{
        console.log(response);
        this.project = response.project;
      },
      (error:any) =>{
        console.log(<any>error);
      }
    )
  }

  onSubmit(form: any){
    console.log(this.project);
    //Guardar los datos
    this._projectService.updateProject(this.project).subscribe(
      (response) =>{
        console.log(response);
        if(response.project){
          //Subir la imagen
          if(this.filesToUpload){
            this._uploadService
            .makeFileRequest(
              Global.url+"upload-image/"+response.project._id,
              [],
              this.filesToUpload, 'image')
              .then((result:any) => {
                this.save_project = result.project;
                this.status = 'success'
            });
          } else{
            this.save_project = response.project;
            this.status = 'success'
          }

        }else{
          this.status='failed'
        }
      },
      err =>{
         console.log(<any> err);

      }

    );

  }

//Metodo para el guardado de las imagenes
fileChangeEvent(fileInput: any){
  console.log(fileInput);
  this.filesToUpload= <Array<File>>fileInput.target.files;
}


}
