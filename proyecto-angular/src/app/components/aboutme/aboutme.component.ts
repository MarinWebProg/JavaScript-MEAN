import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public title: String;
  public subtitle: String;
  public email: String;

  constructor(){
    this.title = "Sergio Alejandro Marin Sarmiento"
    this.subtitle = "Desarrollador Junior Advanced Web"
    this.email = "correo@correo.com"

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
