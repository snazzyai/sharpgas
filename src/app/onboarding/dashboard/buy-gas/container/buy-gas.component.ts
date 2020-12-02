import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-gas',
  templateUrl: './buy-gas.component.html',
  styleUrls: ['./buy-gas.component.scss']
})
export class BuyGasComponent implements OnInit {

  heading: string = 'Buy Gas';
  selected: boolean = false;

  gasDetails: object[] = [
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

  setSelected(){
    this.selected = !this.selected;
    console.log(this.selected)
  }

}
