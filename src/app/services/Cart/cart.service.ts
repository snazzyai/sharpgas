import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { ICartItem } from '../../models/cartItem'
import { IProduct } from '../../models/product'
import {Observable} from 'rxjs'
import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators'



const apiUrl = "http://localhost:7000/cart"
@Injectable({
  providedIn: 'root'
})
export class CartService {


  subject1 = new Subject()
  subject2 = new Subject()

  constructor(private http: HttpClient) { }


    getCartItems(){
      return this.http.get<ICartItem>(apiUrl).pipe(
        map((result:any)=>{

    }))
  }

    addCartItems(product: IProduct):Observable<any>{
      return this.http.post(apiUrl, { product })
    }


    public formatMoney(amount){
          return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount)
    }


    public sendCartLength(length){
      this.subject2.next(length)
    }

    public getCartLength(){
      return this.subject2.asObservable()
    }



    public sendMsg(product){
      this.subject1.next(product)

    }


    public getMsg(){
      return this.subject1.asObservable()
    }


}
