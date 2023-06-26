import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartlistService } from 'src/app/service/cartlist/cartlist.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-cartdroplist',
  templateUrl: './cartdroplist.component.html',
  styleUrls: ['./cartdroplist.component.scss']
})
export class CartdroplistComponent implements OnInit {
  isListHide = true;
  procced=false;
  cartlength: any
  nocart = false
  constructor(private cartlistdrop: CartlistService, private router: Router) { }
  cartlistshows: any = []
  ngOnInit(): void {
    // this.shows();
    this.cartlistdrop.getcartCount().subscribe(res => {
      this.cartlength = res.cartItems;
    })
  }
  toggle() {
    this.isListHide = !this.isListHide;
    this.shows();

  }

  shows() {
    // this.nocart=false
    this.cartlistshows = this.cartlistdrop.cartlist
    console.log(this.cartlistshows, 'shows');
    this.cartlength = this.cartlistshows.length
    console.log(this.cartlength, 'length');
    if (this.cartlength == 0) {
      this.nocart = true;
      this.procced=false;
    } else {
      this.nocart = false
      this.procced=true;
    }

    // this.cartlistdrop.countaddcart=this.cartlength;

  }

  actionbuttondec(itemsindex: any, actionnumber: number) {
    if (this.cartlistshows[itemsindex].count > 1 || actionnumber == 1) {
      this.cartlistshows[itemsindex].count += actionnumber;
    }
  }

  delete(index: number) {
    console.log(index, 'index');
    this.cartlistshows[index]['cartshow'] = false;
    this.cartlistshows.splice(index, 1)
    this.cartlistdrop.cartlist = this.cartlistshows
    let count = {
      cartItems: this.cartlength - 1
    }
    this.cartlistdrop.setcartCount(count)
  }

  deleteall() {
    for(var i=0; i<this.cartlistshows.length; i++){
      this.cartlistshows[i]['cartshow'] = false;
    }
    // this.cartlistshows[0]['cartshow'] = false;
    this.cartlistdrop.cartlist.splice(0,this.cartlistshows.length);
    this.cartlistdrop.cartlist = this.cartlistshows
    let count = {
      cartItems: 0
    }
    this.cartlistdrop.setcartCount(count)
  
    
  }
  proceed(){
    if(this.cartlistshows.length>0){
    this.router.navigate(['/Proceed'])
    }
    else{
      alert("Please add the items")
    }
  }


}
