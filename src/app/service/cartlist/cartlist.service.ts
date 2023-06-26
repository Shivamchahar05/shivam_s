import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
interface cartCount{
  cartItems: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartlistService {
  countaddcart:any;
  cartlist:any=[]
  gpay_amount:any
  constructor(public http: HttpClient) {};

  private _cartSize = new BehaviorSubject<cartCount>({
    cartItems: 0
  });

  private _showCart = new BehaviorSubject(false);

  private _showCart$ = this._showCart.asObservable();

  private _cartSize$ = this._cartSize.asObservable();

  gpay = new BehaviorSubject<number>(0)

  getcartCount(): Observable<cartCount>{
    return this._cartSize$;
  }

  setcartCount(newSize: cartCount) {
    return this._cartSize.next(newSize);
  }

  getShowCart(): Observable<boolean>{
    return this._showCart$;
  }

  setShowCart(newSize: boolean) {
    return this._showCart.next(newSize);
  }

  post(apiRoute:any):Observable<any> {
    return this.http.get(apiRoute);
  }
}
