import { Provincia } from './provincia.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impresoras',
  templateUrl: './impresoras.component.html',
  styleUrls: ['./impresoras.component.css']
})
export class ImpresorasComponent implements OnInit {

  listProvincias: Array<Provincia>;
  provinciaSeleccionada: Provincia;

  constructor() { }

  ngOnInit() {
    this.listProvincias = [
      {id: '1', name: 'malaga'},
      {id: '2', name: 'sevilla'},
      {id: '3', name: 'granada'}
    ];

    this.provinciaSeleccionada = this.listProvincias[1];
  }

}
