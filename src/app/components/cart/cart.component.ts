import { Component, OnInit, Input } from '@angular/core';
import { ICartItem } from 'src/app/models/cartItem';
import { IProduct } from 'src/app/models/product';
import { CartService } from '../../services/Cart/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any = [];  //id, size, quantity, price
  cartTotal: number;
  cartItemsLength:number = 0
  formattedTotal: any
  showEmptyCart: boolean = false




  constructor(private cartService: CartService ) { }

  ngOnInit(): void {
    this.addProductToCart()
    if(!this.cartItemsLength || this.cartItemsLength === 0){
      console.log(this.cartItemsLength)
     this.showEmptyCart = true
    }
  }

  //server side carting
  //first get all cart data
  // on product click, run addProductCart and update on the server
  //if user leaves and comes back it gets the data from the server including updated quantities which is then passed to the cartItems


  calculateCartTotal() {
    this.cartTotal = 0
    this.cartItemsLength = this.cartItems.length
    this.cartItems.map((item)=>{
      this.cartTotal = this.cartTotal + (item.quantity * item.price)
    })
  }


  addProductToCart(){
    this.cartService.getMsg().subscribe((items:any)=>{
       let productExists = false
       console.log(items)
       this.cartItems.map(cart=>{
         if(cart.id === items.id){
           productExists = true
           cart.quantity++
           return
         }
       })
       if(!productExists){
            this.cartItems.push(items)
       }

       this.showEmptyCart = false
       this.calculateCartTotal()
       this.cartService.sendCartLength(this.cartItemsLength)
    })
  }

}
