import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyGasRoutingModule } from './buy-gas.routing';

import {BuyGasComponent} from './container/buy-gas.component';

import {SharedModule} from '../../../components/shared/shared.module';



@NgModule({
  declarations: [BuyGasComponent],
  imports: [
    CommonModule,
    SharedModule,
    BuyGasRoutingModule,
  ],

})
export class BuyGasModule { }
