import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcartComponent } from './newcart.component';

const routes: Routes = [
  // {
  //   path:'',component:NewcartComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewcartRoutingModule { }
