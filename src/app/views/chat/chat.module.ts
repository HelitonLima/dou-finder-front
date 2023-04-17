import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/assets/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { PostComponent } from './post/post.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ChatPageComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class ChatModule { }
