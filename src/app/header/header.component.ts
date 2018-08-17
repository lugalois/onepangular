import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo = "M473m471C42";

  /**
   * enviarTexto
   * console.log(this.titulo);   */
  public enviarTexto() {
    console.log('CLICK:', this.titulo);    
  }



  constructor() { }

  ngOnInit() {
  }

}
