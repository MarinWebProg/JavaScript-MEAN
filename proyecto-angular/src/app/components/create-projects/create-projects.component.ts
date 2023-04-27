import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateProjectsComponent implements OnInit{
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public save_project: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,

  ){
    this.title = "Crear Proyecto";
    this.project = new Project('','','','',2023,'','');
    this.status = '';
    this.filesToUpload = new Array();
  }

  //onInit
  ngOnInit(){
  }

  onSubmit(form: any){
    console.log(this.project);
    //Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        console.log(response);
        if(response.project){
          //Subir la imagen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result:any) =>{
            this.status = 'success'
            this.save_project = result.project;
            form.reset();
          });
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
