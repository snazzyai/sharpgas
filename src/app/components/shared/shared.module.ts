import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import { CartComponent } from '../cart/cart.component';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, CartComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent, HeaderComponent, CartComponent]
})
export class SharedModule { }
