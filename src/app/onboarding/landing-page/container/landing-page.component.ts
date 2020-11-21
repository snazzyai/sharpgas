import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  showMenu: boolean = false;

  constructor() {}

  ngOnInit() {}

  showHideMenu() {
    this.showMenu = !this.showMenu;
  }
}
