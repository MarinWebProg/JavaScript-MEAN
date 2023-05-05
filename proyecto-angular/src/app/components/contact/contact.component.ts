import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider : number = 0;
  public anchuraToSlider : any = 0;
  public captions : boolean;
  public autor: any;

  //ViewChild
  @ViewChild('textos',{static:true}) textos?:ElementRef;

  constructor(){
    this.captions = true;
  }

  ngOnInit(){
    let opcion_clasica = document.querySelector('#texto')?.innerHTML; //Este la opcion de JS que busca la info con el viewchild
    // console.log("1 ----> "+opcion_clasica);
    // console.log("2 ----> ",this.textos);
    // console.log("3 ----> ",this.textos?.nativeElement.textContent);
    // alert(this.textos?.nativeElement.textContent);

  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = false;
  }

  //Con el evenmitter nos trae el evento con el json de la clase Hijo
  getAutor(event:any){
    console.log(event);
    this.autor = event;

  }
}
