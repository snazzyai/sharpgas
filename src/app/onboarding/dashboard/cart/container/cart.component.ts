import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../../services/Cart/cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // this is using localstorage temporarily
  items: [] = []
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    //server call to get all cart items
    this.cartService.getCartItems().subscribe((cartItems: any)=>{
      this.items = cartItems
    })

  }




 currencyFormat(amount: number){
   return this.cartService.formatMoney(amount)
 }


  getNumberOfItems(){

  }

  getTotalPrice(){

  }

  // onButtonClickPlus(id){
  //   console.log('plus')
  //   this.cart.increaseQuantity(id)
  // }

  // onButtonClickMinus(id){
  //   console.log('minus')
  //   this.cart.decreaseQuantity(id)
  // }
}

