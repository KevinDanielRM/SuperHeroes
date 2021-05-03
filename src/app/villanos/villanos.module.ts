import { VillanoComponent } from './villano/villano.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    VillanoComponent
  ],
  exports: [
    VillanoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VillanosModule{
}