import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.scss']
})
export class ProceedComponent implements OnInit {
  isLinear = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['/cart'])
  }

}
