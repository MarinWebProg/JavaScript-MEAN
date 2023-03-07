import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()
export class UploadService{
  public url: string;

  constructor(){
    this.url =  Global.url;
  }

  makeFileRequest(url: string, params: Array<string>,files: Array<File>, name: string){
    return new Promise(function(resolve,reject){
      let formData: any = new FormData();//Esto nos permite simular que estamos creando un formulario
      let xhr = new XMLHttpRequest();//Para hacer peticiones asincronas

      for(let i= 0; i<files.length; i++){
        formData.append(name,files[i], files[i].name);
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){ // Estatus que verifica el guardado exitoso
              resolve(JSON.parse(xhr.response));
          }else{
            reject((xhr.response));
          }
        }// if(xhr.readyState == 4)
      }//xhr.onreadystatechange = function()

      xhr.open('POST',url, true);
      xhr.send(formData);

    });
  }
}
