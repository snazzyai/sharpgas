import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../../services/Cart/cart.service';
import { ProductsService } from '../../../../services/Products/products.service'
import {IProduct} from '../../../../models/product'


@Component({
  selector: 'app-buy-gas',
  templateUrl: './buy-gas.component.html',
  styleUrls: ['./buy-gas.component.scss']
})
export class BuyGasComponent implements OnInit {


  //this is a demo. Supposed to be used as service
  heading: string = 'Buy Gas';
  selected: boolean = false;
  products: IProduct[];
  cartLength: number;



  constructor(private cartService: CartService, private productService: ProductsService) { }

  ngOnInit(): void {
    //api call
   this.productService.getProducts().subscribe((products)=>{
    this.products = products
   })

  }

  setSelected(){
    this.selected = !this.selected;

  }


  //local implementation
  addToCart(product){
    let payload = {
      ...product,
      quantity: 1
    }
    this.cartService.sendMsg(payload)
    // this.cartService.getCartLength().subscribe(len=>{
    //   console.log(len)
    // })
    // this.cartService.getCartLength().subscribe((length:any)=>{
    //   console.log(length)
    //   if(length){
    //     this.cartLength = length
    //    }
    //    this.cartLength = 0
    // })
  }

  //server implementation
  // addToCart(product, qty){
  //   //server adds to cart the filtered product and updated quantity and returns back the new cart Items
  //   let payload = {
  //    productId: product.id,
  //    quantity: qty

  //   }
  //   this.cartService.addCartItems(payload).subscribe((items)=>{
  //     this.cartService.sendMsg(items)
  //   })

  // }

}
