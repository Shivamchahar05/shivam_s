import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TablePipeModule } from '../../customPipe/table-pipe/table-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    TablePipeModule,
    ReactiveFormsModule
  ],
  exports:[TableComponent]
})
export class TableModule { }
