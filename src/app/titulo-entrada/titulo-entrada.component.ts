import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-entrada',
  templateUrl: './titulo-entrada.component.html',
  styleUrls: ['./titulo-entrada.component.css']
})
export class TituloEntradaComponent implements OnInit {

  titulo = "Bienvenido a ";

  constructor() { }

  ngOnInit(): void {
  }

}
