import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateChatPageComponent } from './private-chat-page/private-chat-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateChatPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateChatRoutingModule { }
