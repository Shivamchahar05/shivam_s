import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { TableModule } from '../table/table.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CartService } from './service/cart.service';
import { NewcartComponent } from '../newcart/newcart.component';
import { CartdroplistComponent } from './cartdroplist/cartdroplist.component';
import { TablePipePipe } from 'src/app/customPipe/table-pipe/table-pipe.pipe';
@NgModule({
  declarations: [
    CartComponent,
    NewcartComponent,
    CartdroplistComponent,
    TablePipePipe
  ],
  providers:[CartService],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    // TableModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  exports:[CartdroplistComponent]
})
export class CartModule { }
