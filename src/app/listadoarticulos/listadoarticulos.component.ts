import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrls: ['./listadoarticulos.component.css']
})
export class ListadoarticulosComponent implements OnInit{

  @Input() datos: any; // Especifica el tipo aquí

  constructor() {}

  ngOnInit() {
    
  }

}

