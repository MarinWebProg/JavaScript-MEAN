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
}
