import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-listas',
  templateUrl: './ejercicio-listas.component.html',
  styleUrls: ['./ejercicio-listas.component.css']
})
export class EjercicioListasComponent implements OnInit {

  listPensamientos: Array<string>;
  parapa: string;

  constructor() { }

  ngOnInit() {
    this.listPensamientos = [];
  }

  incluyeValor() {
    this.listPensamientos.push(this.parapa);
  }
}
