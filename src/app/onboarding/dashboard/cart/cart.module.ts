import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart.routing';

import {CartComponent} from './container/cart.component';

import {SharedModule} from '../../../components/shared/shared.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule,
  ],

})
export class CartModule { }
