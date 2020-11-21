import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyGasComponent } from './container/buy-gas.component';


const routes: Routes = [
  {
    path: '',
    component: BuyGasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyGasRoutingModule {}
