import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/assets/material.module';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    NotificationsPageComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class NotificationsModule { }
