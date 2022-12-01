import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateChatRoutingModule } from './private-chat-routing.module';
import { PrivateChatPageComponent } from './private-chat-page/private-chat-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/assets/material.module';


@NgModule({
  declarations: [
    PrivateChatPageComponent
  ],
  imports: [
    CommonModule,
    PrivateChatRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class PrivateChatModule { }
