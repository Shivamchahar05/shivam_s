import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewcartRoutingModule } from './newcart-routing.module';
import { NewcartComponent } from './newcart.component';


@NgModule({
  declarations: [
    NewcartComponent
  ],
  imports: [
    CommonModule,
    NewcartRoutingModule

  ],
  exports: [NewcartComponent]
})
export class NewcartModule { }
