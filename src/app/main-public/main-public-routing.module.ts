import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPublicComponent } from './main-public.component';

const routes: Routes = [
  {
    path: '',
    component: MainPublicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPublicRoutingModule { }
