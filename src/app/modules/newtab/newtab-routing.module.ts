import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewtabComponent } from './newtab.component';

const routes: Routes = [
  {
    path:'', component:NewtabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewtabRoutingModule { }
