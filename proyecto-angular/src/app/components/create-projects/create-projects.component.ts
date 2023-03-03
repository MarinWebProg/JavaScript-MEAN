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

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Crear Proyecto";
    this.project = new  Project(
      '','','','',2023,'',''
    );
  }

  //onInit
  ngOnInit(){
  }

  onSubmit(form: any){
    console.log(this.project);

  }
}
