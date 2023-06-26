import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceedRoutingModule } from './proceed-routing.module';
import { ProceedComponent } from './proceed.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FinalcartComponent } from './finalcart/finalcart.component';
import { AddressComponent } from './Address/address.component';
import { PaymentComponent } from './Payment/payment.component';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {GooglePayButtonModule } from '@google-pay/button-angular';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProceedComponent,
    FinalcartComponent,
    AddressComponent,
    PaymentComponent,
    
  ],
  imports: [
    CommonModule,
    ProceedRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    GooglePayButtonModule,
    MatDialogModule
  ]
})
export class ProceedModule { }
