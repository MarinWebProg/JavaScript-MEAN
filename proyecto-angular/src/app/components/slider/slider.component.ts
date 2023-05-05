import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
declare const $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  @Input() anchura: number;
  @Input('etiquetas') captions: boolean = false;

  @Output()consegirAutor = new EventEmitter;

  public autor : any;

  constructor(){
    this.anchura = 0;
    this.autor ={
      nombre: "Sergio Marin",
      website: "github.com/MarinWebProg",
      youtube: "youtube"
    }

  }

  ngOnInit(){
    $("#logo").click(function (e:any) {
      e.preventDefault();
      $("header")
          .css("background", "green")
          .css("height", "50px");
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura,
    });
  }

  //Con EventEmitter, lo que hace es emita el evento para el otro componente
  lanzar(event:any){
    console.log(event);
    this.consegirAutor.emit(this.autor)
  }
}
