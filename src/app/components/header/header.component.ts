import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import {CartService} from '../../services/Cart/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartLength: number = 0
  user: any;



  constructor(private cartService: CartService,
    private authService: AuthenticationService) {
  }

  ngOnInit(): void{
    this.authService.getUser().subscribe(user => this.user = user)
    this.cartService.getCartLength().subscribe((len:any)=>{
      this.cartLength = len
    })
  }

  getLength() {

  }




}
