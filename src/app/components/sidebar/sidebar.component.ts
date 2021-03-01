import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => this.user = user)
  }

}
