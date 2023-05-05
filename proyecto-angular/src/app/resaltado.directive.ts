import { Directive, ElementRef ,OnInit} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    public el: ElementRef) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //console.log(this.el.nativeElement);
    let element = this.el.nativeElement;
    element.style.background = "blue";
    element.style.padding = "20px";
    element.style.mariginTop= "15px";
    element.style.color= "white";
    element.innerText = element.innerText.toUpperCase();


  }

}
