import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './cabeza/cabeza.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CabezaComponent],
  exports: [CabezaComponent]
})
export class SharedModule { }
