import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-gas',
  templateUrl: './buy-gas.component.html',
  styleUrls: ['./buy-gas.component.scss']
})
export class BuyGasComponent implements OnInit {

  heading: string = 'Buy Gas';
  selected: boolean = false;
  lengthOfCart: number = JSON.parse(localStorage.getItem('cart')).length

  gasDetails: object[] = [
    {
      id: 1,
      size: '4kg',
      availability: 'Available',
      imgUrl: '../../../assets/img/cylinderBuy.jpg',
      price: 3000
    },
    {
      id: 2,
      size: '10kg',
      availability: 'Available',
      imgUrl: '../../../assets/img/cylinderBuy.jpg',
      price: 6000
    },
    {
      id: 3,
      size: '20kg',
      availability: 'Available',
      imgUrl: '../../../assets/img/cylinderBuy.jpg',
      price: 10000
    },
    {
      id: 4,
      size: '50kg',
      availability: 'Available',
      imgUrl: '../../../assets/img/cylinderBuy.jpg',
      price: 20000
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  setSelected(){
    this.selected = !this.selected;
    console.log(this.selected)
  }

  cartButtonClick(id, price,size, imgUrl){

    const data =  {
      id: id,
      quantity: 1,
      size: size,
      price: price,
      imgUrl: imgUrl,
      total: price
    }
    if(localStorage.getItem('cart') === null){
      localStorage.setItem('cart', JSON.stringify([data]) )
      console.log('added to cart', JSON.parse(localStorage.getItem('cart')))
    }
    else{

      let items = JSON.parse(localStorage.getItem('cart'))

      //finds item with id and updates it
      items.map((item)=>{
        if(item.id === id){
          item.quantity += 1
          item.total = item.quantity * item.price
          console.log('updated cart')
        }
      })

      //check to see if item is present, if not it adds a new item
     let foundItem =  items.find((item)=>{
        return item.id === id
      })
      console.log('found item', foundItem)
      if(foundItem === undefined){
        items.push(data)
        console.log('newItem Added')
      }
      localStorage.setItem('cart', JSON.stringify(items))
      console.log(JSON.parse(localStorage.getItem('cart')))
    }


  }

  buyButtonClick(id){
    console.log('buybutton', id)
  }

}
