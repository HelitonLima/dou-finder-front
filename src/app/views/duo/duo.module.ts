import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/assets/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuoRoutingModule } from './duo-routing.module';
import { DuoPageComponent } from './duo-page/duo-page.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    DuoPageComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    DuoRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class DuoModule { }
