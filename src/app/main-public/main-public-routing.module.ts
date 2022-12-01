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
        loadChildren: () => import('../views/chat/chat.module').then(m => m.ChatModule),
        data: {
          title: 'Chat'
        }
      },
      {
        path: 'duos',
        loadChildren: () => import('../views/duo/duo.module').then(m => m.DuoModule),
        data: {
          title: 'Duplas'
        }
      },
      {
        path: 'private-chat/:id',
        loadChildren: () => import('../views/private-chat/private-chat.module').then(m => m.PrivateChatModule),
        data: {
          back: 'duos'
        }
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
