import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPublicComponent } from './main-public.component';

const routes: Routes = [
  {
    path: '',
    component: MainPublicComponent,
    children: [
      {
        path: 'chat',
        loadChildren: () => import('../views/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPublicRoutingModule { }
