import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  data: any;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.data = data;
    console.log(this.data, "jiiii");
  }
  ngOnInit() {
  }

  save() {
    this.dialogRef.close(1);
  }

  close() {
    this.dialogRef.close(2);
  }

}
