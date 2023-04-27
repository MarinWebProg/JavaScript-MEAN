import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
    private _router : Router,
    private _route : ActivatedRoute,
  ) {
    this.url = Global.url;
    this.project = new Project('', '', '', '', 2023, '', '');

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
      response =>{
        console.log(response);
        this.project = response.project;
      },
      (error:any) =>{
        console.log(<any>error);
      }
    )
  }

}
