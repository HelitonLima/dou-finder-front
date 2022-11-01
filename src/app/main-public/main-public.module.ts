import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPublicRoutingModule } from './main-public-routing.module';
import { MainPublicComponent } from './main-public.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/assets/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    MainPublicComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainPublicRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class MainPublicModule { }
