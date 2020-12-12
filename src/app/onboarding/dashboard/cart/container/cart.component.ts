import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: object[] = [
    {
      id: 1,
      size: '4kg',
      availability: 'Available',
      image: 'imageLink',
      imgUrl: '../../../assets/img/cylinderBuy.jpg'
    },
    {
      id: 2,
      size: '10kg',
      availability: 'Available',
      image: 'imageLink',
      imgUrl: '../../../assets/img/cylinderBuy.jpg'
    },
    {
      id: 3,
      size: '20kg',
      availability: 'Available',
      image: 'imageLink',
      imgUrl: '../../../assets/img/cylinderBuy.jpg'
    },
    {
      id: 4,
      size: '50kg',
      availability: 'Available',
      image: 'imageLink',
      imgUrl: '../../../assets/img/cylinderBuy.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }




}
