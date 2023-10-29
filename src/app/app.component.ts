import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp1';

  productos=[
    {codigo:1, descripcion: 'Coronita', precio: '0.50'},
    {codigo:2, descripcion: 'Incakola', precio: '2.50'},
    {codigo:3, descripcion: 'Cocacola', precio: '3.50'},
    {codigo:4, descripcion: 'Cañonazo', precio: '1.50'},
    {codigo:5, descripcion: 'Agua Cielo', precio: '1.20'},


  ];



  @ViewChild('selector2') selector: SelectornumericoComponent = new SelectornumericoComponent();


  fijarSelector2(valor: number){
    this.selector.fijar(valor);
  }
}





