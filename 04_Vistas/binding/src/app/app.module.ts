import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { ListaComponent } from './lista/lista.component';
import { EjercicioListasComponent } from './ejercicio-listas/ejercicio-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    Formulario1Component,
    Formulario2Component,
    ListaComponent,
    EjercicioListasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
