import { Injectable } from "@angular/core";
import{ HttpClient,HttpHeaders }from"@angular/common/http"
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { Global } from "./global";

@Injectable()
export class ProjectService{
  public url:string;
  constructor(
    private _http: HttpClient)
  {
    //TODO:Aqui es parte del constructor
    this.url=Global.url;
  }

  //Testo de conexion del servicio en AngularJS
  testService(){
    return 'Probando el servicio de Angular'
  }

  //Para empezar a guardar mediante la conexion de nuestra api
  saveProject(project: Project): Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');
      try {
        console.log("Pasa el guardado")
      } catch (e) {
        console.log("Este seria el error: "+e);
      }
      return this._http.post(this.url+'save-project',params,{headers: headers});
  }

  //Para mostrar los proyectos (Lo que esta almacenado en MongoDB)
  getProjects(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'projects',{headers: headers});
  }

  //Para mostrar el proyecto con mas detalle
  getProject(id:any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'project/'+id,{headers: headers});
  }

  //para eliminar el proyecto
  deleteProject(id:any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'project/'+id,{headers: headers});
  }

  //Para edicion de los proyectos
  updateProject(project:any): Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'project/'+project._id,params,{headers: headers});
  }

}
