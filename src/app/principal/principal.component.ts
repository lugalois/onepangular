import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  ocultar = false;
  heroes = ['a','b','c','d'];

  constructor() { }

  ngOnInit() {
  }

}
