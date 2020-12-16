import { Component, Input, OnInit } from '@angular/core';
import {CartService} from '../../services/Cart/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartLength: number = 0



  constructor(private cartService: CartService) {
  }

  ngOnInit(): void{
    this.cartService.getCartLength().subscribe((len:any)=>{
      this.cartLength = len
    })
  }

  getLength() {

  }




}
