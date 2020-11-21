import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  toShowEdit: boolean = true;
  toShowUpdate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showEdit(){
    this.toShowUpdate = !this.toShowUpdate;
    this.toShowEdit = !this.toShowEdit;
  }

  showUpdate(){}

}
