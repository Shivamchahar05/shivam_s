import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewtabRoutingModule } from './newtab-routing.module';
import { NewtabComponent } from './newtab.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    NewtabComponent
  ],
  imports: [
    CommonModule,
    NewtabRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class NewtabModule { }
