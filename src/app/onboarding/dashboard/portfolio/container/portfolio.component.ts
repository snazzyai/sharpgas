import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../services/Authentication/authentication.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  toShowEdit: boolean = true;
  toShowUpdate: boolean = false;
  token: any;
  user: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => this.user = user)

    console.log(JSON.stringify(this.user.data))
  }
  showEdit(){
    this.toShowUpdate = !this.toShowUpdate;
    this.toShowEdit = !this.toShowEdit;
  }
  showUpdate(){}


  updateProfile(){

  }

}
