import { Component, OnInit } from '@angular/core';
import { CartlistService } from 'src/app/service/cartlist/cartlist.service';

@Component({
  selector: 'app-finalcart',
  templateUrl: './finalcart.component.html',
  styleUrls: ['./finalcart.component.scss']
})
export class FinalcartComponent implements OnInit {
  cartlistshows:any
  totalPrice: number = 0;
  constructor(private cartlistdrop: CartlistService) { }

  ngOnInit(): void {
    this.shows();
  }


  shows(){
  console.log('hiiii');
  this.cartlistshows = this.cartlistdrop.cartlist
  console.log(this.cartlistshows,'list');
  this.totalPrice = this.totalAmount();
  this.cartlistdrop.gpay.next(this.totalPrice)
  }
  actionbuttondec(itemsindex: any, actionnumber: number) {
    if (this.cartlistshows[itemsindex].count > 1 || actionnumber == 1) {
      this.cartlistshows[itemsindex].count += actionnumber;
      this.totalPrice = this.totalAmount();
      // this.cartlistdrop.gpay_amount=this.totalPrice
      // console.log( this.cartlistdrop.gpay_amount,'gpay in service');
      this.cartlistdrop.gpay.next(this.totalPrice)
      
    }
  }
  totalAmount() {
    let price = 0;
    this.cartlistshows.map((items: any) => {
      console.log(items,'items');
      
      if (items.cartshow) {
        price += (items.count) * (items.price);
      }
    })
    return price;
  }
  
}
