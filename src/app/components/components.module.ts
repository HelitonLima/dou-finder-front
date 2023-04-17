import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './alerts/default/default.component';
import { InfoUserComponent } from './modals/info-user/info-user.component';
import { MaterialModule } from 'src/assets/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmLogoutComponent } from './modals/confirm-logout/confirm-logout.component';



@NgModule({
  declarations: [
    DefaultComponent,
    InfoUserComponent,
    ConfirmLogoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    DefaultComponent,
    InfoUserComponent
  ]
})
export class ComponentsModule { }
