
// Modulos de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modulos de la aplicacion
import { SharedModule } from './shared/shared.module';
// componentes del modulo
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { LadoComponent } from './lado/lado.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    LadoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
