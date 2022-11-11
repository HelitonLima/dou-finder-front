import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuoRoutingModule } from './duo-routing.module';
import { DuoPageComponent } from './duo-page/duo-page.component';


@NgModule({
  declarations: [
    DuoPageComponent
  ],
  imports: [
    CommonModule,
    DuoRoutingModule
  ]
})
export class DuoModule { }
