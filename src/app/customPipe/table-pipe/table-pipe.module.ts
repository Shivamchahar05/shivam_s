import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePipePipe } from './table-pipe.pipe';



@NgModule({
  declarations: [TablePipePipe],
  imports: [
    CommonModule
  ],
  exports:[TablePipePipe]
})
export class TablePipeModule { }
