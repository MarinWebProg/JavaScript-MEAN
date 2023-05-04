import { Component, Input, OnInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() anchura: number;
  @Input('etiquetas') captions: boolean = false;

  constructor(){
    this.anchura = 0;
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
}
