import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio.routing';

import {PortfolioComponent} from './container/portfolio.component';
// import {HeaderComponent} from '../components/header/header.component';
// import { SidebarComponent } from '../components/sidebar/sidebar.component';

import {SharedModule} from '../../../components/shared/shared.module';



@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule
  ],

})
export class PortfolioModule { }
