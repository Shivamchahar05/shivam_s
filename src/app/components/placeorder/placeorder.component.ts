import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlaceorderComponent> ,private route:Router) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
    this.route.navigate(['/cart'])
  }

}
