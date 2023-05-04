import { Component, OnInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider : number = 0;
  public anchuraToSlider : number = 0;
  public captions : boolean;

  constructor(){
    this.captions = true;
  }

  ngOnInit(){
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = 0;
  }

}
