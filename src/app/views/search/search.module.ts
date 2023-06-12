import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/assets/material.module';
import { DuoUserComponent } from './search-page/duo-user/duo-user.component';


@NgModule({
  declarations: [
    SearchPageComponent,
    DuoUserComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SearchModule { }
