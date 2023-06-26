import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProceedComponent } from './proceed.component';

const routes: Routes = [
  {
    path:'', component:ProceedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProceedRoutingModule { }
