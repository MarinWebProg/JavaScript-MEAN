import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css'],
  providers: [ProjectService]
})
export class CreateProjectsComponent implements OnInit{
  public title: string;
  public project: Project;
  public status: string;

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Crear Proyecto";
    this.project = new Project('','','','',2023,'','');
    this.status = '';
  }

  //onInit
  ngOnInit(){
  }

  onSubmit(form: any){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      (response) =>{
        console.log(response);
        if(response.project){
          this.status = 'success'
          form.reset();
        }else{
          this.status='failed'
        }
      },
      err =>{
         console.log(<any> err);

      }

    );

  }
}
