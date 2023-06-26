import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartlistService } from 'src/app/service/cartlist/cartlist.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-newcart',
  templateUrl: './newcart.component.html',
  styleUrls: ['./newcart.component.scss'],
  // animations: [
  //   trigger('popOverState', [
  //     state('show',style({
  //       opacity: 1,
  //       transform: 'translate(100%,)'
  //     })),
  //     state('hide',   style({
  //       transform: 'translate(1500px,-500px)',
  //        opacity: 0,

  //     })),
  //      transition('show => hide', animate('1200ms ease-out')),
  //     transition('hide => show', animate('1000ms ease-in'))
  //   ])
  // ]
})
export class NewcartComponent implements OnInit {
  previewImg:any
  cartshow=true
  show = true;
  subcribeCount!: Subscription;
  subcribeShowCart!: Subscription;
  cartSize: number = 0;
    showCart: boolean = false;
  constructor(private apiservice:ApiService,private dropdowncart:CartlistService) { }

  ngOnInit(): void {
    this.getcartlist();
    this.subcribeCount = this.dropdowncart.getcartCount().subscribe((orderCount: any) => {
      this.cartSize = orderCount.cartItems;
      console.log(orderCount, "kokokk");
    })
    this.subcribeShowCart = this.dropdowncart.getShowCart().subscribe(val => {
      this.showCart = val;
    })
  }

  // get stateName() {
  //   return this.show ? 'show' : 'hide'
  // }
  // animi(e:any) {
  //   this.show = !this.show;
  //   setTimeout(() => {
  //     this.show=true
  //   },1000)
  // }


  getcartlist(){
    this.apiservice.datalist().subscribe((res:any)=>{
      console.log(res,'carddata');
      this.previewImg=res.products
      console.log(this.previewImg);
    })
  }
  matBadgeValue=0
  addcart(index:any,addtocartbutton:any){ 

  let target_parent=addtocartbutton.parentNode.parentNode

  console.log("this is target_parent1",target_parent);
  

  let img=target_parent.querySelector("img")

  let flying_img=img.cloneNode()

  flying_img.classList.add('flying-img');

  console.log("this parent target2",target_parent);
    
    

  target_parent.appendChild(flying_img);

  console.log("this parent target2 after append",target_parent);


  let flying_img_pos = img.getBoundingClientRect()
  

  let shopping_cart = document.querySelector(".add-btn")

  console.log("flying_img_pos",flying_img_pos);
  

  let shopping_cart_pos = shopping_cart!.getBoundingClientRect()

  console.log("shopping_cart_pos",shopping_cart_pos);
  



  console.log("this is the positions of the shopping cart",shopping_cart_pos);
  
  let data = {
    left:  shopping_cart_pos.left - (shopping_cart_pos.width / 2 + flying_img_pos.left + flying_img_pos.width / 2),
    top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30
  }
  console.log("this is data",data);
  

  flying_img.style.cssText = `
  --left : ${data.left.toFixed(2)}px;
  --top : ${data.top.toFixed(2)}px;
  `;

  setTimeout(() => {
    target_parent.style.zIndex = "";
    target_parent.removeChild(flying_img);
    this.matBadgeValue+=1;
    
  }, 1000);
    // console.log(this.countdata,'count');
    // this.animi(index);
    console.log(index,'addcart');
    this.previewImg[index]['cartshow']=true;
    this.previewImg[index]['count']=1;
    this.dropdowncart.cartlist.push(this.previewImg[index]) 
    let count={
      cartItems:this.cartSize+1
    }
    this.dropdowncart.setcartCount(count)
    
  }

  actionbuttondec(itemsindex:any,actionnumber:number){
    if( this.previewImg[itemsindex].count>1 || actionnumber==1){
      this.previewImg[itemsindex].count+=actionnumber;
    }
  }

}
